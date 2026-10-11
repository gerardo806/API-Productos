export const products_query = {
    getAllProducts: 'SELECT productid, nombre_producto, precio FROM productos',
    getAllProductOnCategory: 'SELECT p.productid, p.nombre_producto, p.precio, c.nombre_categoria FROM productos as p INNER JOIN categories as c ON products.categoriaid = categotias.categoriaId',
}