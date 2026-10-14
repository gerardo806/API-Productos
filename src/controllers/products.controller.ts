import type { Request, Response } from 'express';
import { products_query } from '../config/queries.js';
import { RequestHttpDb } from "../services/requestHttp.js"
import type { NewProduct, Product, ProductWithCategory } from '../interfaces/product.interface.js';
import type { CreateProductDto } from '../dto/creat.product.js';
import { NewProductClass } from '../dto/class/new.product.js';
import type { ResponseHttp } from '../interfaces/response.interface.js';

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

    async saveProduct(req: Request, res: Response): Promise<ResponseHttp> {
        console.log('saveProduct called');
        const productDto: CreateProductDto = req.body;
        const newProduct = new NewProductClass(productDto);
        const validationResult = newProduct.getProduct();

        if (!validationResult.success) {
            const responseErr: ResponseHttp = {
                success: false,
                message: validationResult.message,
                data: null,
                statusCode: 400
            };

            return responseErr;
        }

        const productData = validationResult.data as NewProduct;
        const requestService = new RequestHttpDb(req, res);
        return await requestService.Save(products_query.saveProductOnCategory, [productData.nombre_producto, productData.precio, productData.categoriaid]);
    }
}