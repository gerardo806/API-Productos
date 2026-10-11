import type { Request, Response } from 'express';
import pool from '../config/db.js';
import type { ResponseHttp } from '../interfaces/response.interface.js';
import { errors_queries } from "../config/errors_queries.js"
import type { RowDataPacket } from 'mysql2';

export class RequestHttpDb {
    private req: Request;
    private res: Response;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }

    async GetAll<T extends RowDataPacket>(query: string): Promise<Response> {
        try {
            const [rows] = await pool.query<T[]>(query);
            const response: ResponseHttp = {
                success: true,
                message: 'Products retrieved successfully',
                data: rows
            };
            return this.res.json(response);
        } catch (error: unknown) {
            console.error('Error fetching products:', error);
            const errorCode = typeof error === 'object' && error !== null && 'code' in error
                ? String(error.code)
                : 'UNKNOWN_ERROR';
            const message = errors_queries[errorCode as keyof typeof errors_queries] || 'An unexpected error occurred';
            const response: ResponseHttp = {
                success: false,
                message,
                data: null
            };
            return this.res.status(400).json(response);
        }
    }
}