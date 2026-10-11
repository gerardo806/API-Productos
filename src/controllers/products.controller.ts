import type { Request, Response } from 'express';
import { products_query } from '../config/queries.js';
import { RequestHttpDb } from "../services/requestHttp.js"
import type { Product } from '../interfaces/product.interface.js';

export class ProductsController {
    async getAllProducts(req: Request, res: Response) {
        console.log('getAllProducts called');
        const requestService = new RequestHttpDb(req, res);
        return await requestService.GetAll<Product>(products_query.getAllProducts);
    }

    async getAllProductsOnCategory(req: Request, res: Response) {
        const requestService = new RequestHttpDb(req, res);
        return await requestService.GetAll(products_query.getAllProductOnCategory);
    }
}