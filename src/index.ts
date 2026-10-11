import { config } from "dotenv";
import { apiReference } from '@scalar/express-api-reference';
import { openApiSpec } from './docs/openapi.js';
import productsRoutes from "./routes/products.routes.js";
import express from "express";
import cors from "cors";

// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORTDB || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Expone el JSON de la especificación
app.get('/openapi.json', (req, res) => {
    res.json(openApiSpec);
});

// Interfaz de Scalar
app.use(
    '/docs',
    apiReference({
        url: '/openapi.json'
    })
);

if (productsRoutes.stack.length === 0) {
    console.warn("⚠️ productsRoutes no tiene rutas configuradas");
}

app.use(cors());

// Routes
app.use('/api/products', productsRoutes);

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle server errors
server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`❌ El puerto ${PORT} ya está en uso. Mata el proceso anterior o cambia de puerto.`);
        process.exit(1);
    } else {
        console.error('Error al iniciar el servidor:', error);
    }
});

// Killer server process on SIGINT (Ctrl+C) and SIGTERM (kill)
const shutdown = () => {
    console.log('\nCerrando servidor limpiamente...');
    server.close(() => {
        console.log('Servidor detenido y puerto liberado.');
        process.exit(0);
    });
};

process.on('SIGINT', shutdown);  // Captura Ctrl + C
process.on('SIGTERM', shutdown); // Captura señales de kill o nodemon