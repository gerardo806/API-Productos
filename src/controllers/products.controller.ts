import pool from '../config/db.js';

export const getProducts = async (req, res) => {
    return res.json({ message: 'getProducts' });
}