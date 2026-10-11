import type { Request, Response } from 'express';
import pool from '../config/db.js';
import { products_query } from '../config/queries.js';
import type { Product as p } from '../interfaces/product.interface.js';
import type { ResponseHttp } from '../interfaces/response.interface.js';
import { errors_queries } from "../config/errors_queries.js"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query<p[]>(products_query.getAllProducts);
        const response: ResponseHttp = {
            success: true,
            message: 'Products retrieved successfully',
            data: rows
        };
        return res.json(response);
    } catch (error: unknown) {
        console.error('Error fetching products:', error);
        const errorCode = typeof error === 'object' && error !== null && 'code' in error
            ? String(error.code)
            : 'UNKNOWN_ERROR';
        const message = errors_queries[errorCode as keyof typeof errors_queries] || 'An unexpected error occurred';
        const response: ResponseHttp = {
            success: false,
            message: message,
            data: null
        };
        return res.status(400).json(response);
    }
}