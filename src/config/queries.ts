export const products_query = {
    getAllProducts: 'SELECT productid, nombre_producto, precio FROM productos WHERE estado_producto=1',
    getAllProductOnCategory: 'SELECT p.productid, p.nombre_producto, p.precio, c.nombre_categoria FROM productos as p INNER JOIN categotias as c ON p.categoriaid = c.categoriaId WHERE p.estado_producto=1 AND c.estado_categoria=1',
}