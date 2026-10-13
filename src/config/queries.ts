import type { ProductWithCategory } from "../interfaces/product.interface.js";

export class products_query {
    static readonly getAllProducts: string = 'SELECT productid, nombre_producto, precio FROM productos WHERE estado_producto=1';
    static readonly getAllProductOnCategory: string = 'SELECT p.productid, p.nombre_producto, p.precio, c.nombre_categoria FROM productos as p INNER JOIN categotias as c ON p.categoriaid = c.categoriaId WHERE p.estado_producto=1 AND c.estado_categoria=1';
    static readonly saveProductOnCategory: string = 'INSERT INTO productos (nombre_producto, precio, categoriaid) VALUES (?, ?, ?)';
    static saveProduct(product: ProductWithCategory): string {
        return `INSERT INTO productos (nombre_producto, precio, categoriaid) VALUES ('${product.nombre_producto}', ${product.precio}, ${product.categoriaid})`;
    }
}