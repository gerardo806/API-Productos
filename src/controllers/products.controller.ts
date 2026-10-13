import type { Request, Response } from 'express';
import { products_query } from '../config/queries.js';
import { RequestHttpDb } from "../services/requestHttp.js"
import type { Product, ProductWithCategory } from '../interfaces/product.interface.js';

export class ProductsController {
    async getAllProducts(req: Request, res: Response) {
        console.log('getAllProducts called');
        const requestService = new RequestHttpDb(req, res);
        return await requestService.GetAll<Product>(products_query.getAllProducts);
    }

    async getAllProductsOnCategory(req: Request, res: Response) {
        console.log('getAllProductsOnCategory called');
        const requestService = new RequestHttpDb(req, res);
        return await requestService.GetAll<ProductWithCategory>(products_query.getAllProductOnCategory);
    }

    async saveProduct(req: Request, res: Response) {
        console.log('saveProduct called');
        const product: ProductWithCategory = req.body;
        const requestService = new RequestHttpDb(req, res);
        return await requestService.Save<ProductWithCategory>(products_query.saveProductOnCategory, [product.nombre_producto, product.precio, product.categoriaid]);
    }
}