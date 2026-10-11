import type { Request, Response } from 'express';
import pool from '../config/db.js';

export const getProducts = async (req: Request, res: Response) => {
    return res.json({ message: 'getProducts' });
}