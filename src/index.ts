import { config } from "dotenv";
import express from "express";
import cors from "cors";

// Load environment variables from .env file
config();

import productsRoutes from "./routes/products.routes.js";

const app = express();
const PORT = process.env.PORTDB || 3000;

// Middleware to parse JSON requests
app.use(express.json());

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