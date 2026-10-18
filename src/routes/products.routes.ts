import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { ResponseClienteImp } from "../interfaces/class/ResponseClienteImp.js";
import type { ResponseCliente, ResponseHttp } from "../interfaces/response.interface.js";

const router = Router();
const productsController = new ProductsController();

router.get('/test', (req, res) => {
    res.json({ message: 'Test route for products' });
});

router.get('/list', async (req, res) => {
    const result: ResponseHttp = await productsController.getAllProducts(req, res);
    const resClient: ResponseCliente = ResponseClienteImp.GetResponseClient(result);
    res.status(result.statusCode).json(resClient);
});

router.get('/listAll', async (req, res) => {
    const result: ResponseHttp = await productsController.getAllProductsOnCategory(req, res);
    const resClient: ResponseCliente = ResponseClienteImp.GetResponseClient(result);
    res.status(result.statusCode).json(resClient);
});

router.get('/about', (req, res) => {
    res.json({ message: 'express js framework' });
});

router.post('/save', async (req, res) => {
    const result: ResponseHttp = await productsController.saveProduct(req, res);
    const resClient: ResponseCliente = ResponseClienteImp.GetResponseClient(result);
    res.status(result.statusCode).json(resClient);
});

export default router;
