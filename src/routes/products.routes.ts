import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";

const router = Router();
router.get('/list', getProducts);

export default router;
