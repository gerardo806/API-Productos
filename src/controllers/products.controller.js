import pool from '../config/db';

export const getProducts = async (req, res) => {
    return res.json({ message: 'getProducts' });
}