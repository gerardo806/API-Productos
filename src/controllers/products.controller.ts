import type { Request, Response } from 'express';
import pool from '../config/db.js';
import { products_query } from '../config/queries.js';
import type { Product as p } from '../interfaces/product.interface.js';

export const getProducts = async (req: Request, res: Response) => {
    const [rows] = await pool.query<p[]>(products_query.getAllProducts);
    return res.json(rows);
}