import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";

const router = Router();
const productsController = new ProductsController();

router.get('/test', (req, res) => {
    res.json({ message: 'Test route for products' });
});

router.get('/list', async (req, res) => {
    const result = await productsController.getAllProducts(req, res);
    res.status(result.statusCode).json(result);
});
router.get('/listAll', async (req, res) => {
    const result = await productsController.getAllProductsOnCategory(req, res);
    res.status(result.statusCode).json(result);
});
router.get('/about', (req, res) => {
    res.json({ message: 'express js framework' });
});

router.post('/save', async (req, res) => {
    const result = await productsController.saveProduct(req, res);
    res.status(result.statusCode).json(result);
});

export default router;
