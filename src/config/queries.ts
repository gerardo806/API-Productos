export const products_query: object = {
    getAllProducts: 'SELECT productid, nombre_producto, precio FROM products',
    getAllProductOnCategory: 'SELECT p.productid, p.nombre_producto, p.precio, c.nombre_categoria FROM products as p INNER JOIN categories as c ON products.categoriaid = categotias.categoriaId',
}