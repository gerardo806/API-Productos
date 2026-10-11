import type { RowDataPacket } from "mysql2";

export interface Product extends RowDataPacket {
    productid?: number;
    nombre_producto: string;
    precio: number;
}

export interface ProductWithCategory extends Product {
    nombre_categoria: string;
}