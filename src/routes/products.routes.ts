import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";

const router = Router();
const productsController = new ProductsController();

router.get('/test', (req, res) => {
    res.json({ message: 'Test route for products' });
});

router.get('/list', (req, res) => productsController.getAllProducts(req, res));
router.get('/listAll', (req, res) => productsController.getAllProductsOnCategory(req, res));
router.get('/about', (req, res) => {
    res.json({ message: 'express js framework' });
});

export default router;
