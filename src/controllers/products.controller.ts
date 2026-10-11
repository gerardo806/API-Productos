import type { Request, Response } from 'express';
import { products_query } from '../config/queries.js';
import { RequestHttpDb } from "../services/requestHttp.js"

export class ProductsController {
    async getAllProducts(req: Request, res: Response) {
        console.log('ProductsController.getAllProducts called');
        const requestService = new RequestHttpDb(req, res);
        return await requestService.GetAll(products_query.getAllProducts);
    }
}