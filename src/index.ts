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

// Routes
app.use('/api/products', productsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});