import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";

const router = Router();
const productsController = new ProductsController();

router.get('/test', (req, res) => {
    res.json({ message: 'Test route for products' });
});

router.get('/list', productsController.getAllProducts);
router.get('/listAll', productsController.getAllProductsOnCategory);
router.get('/about', (req, res) => {
    res.json({ message: 'express js framework' });
});

export default router;
