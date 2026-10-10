USE store_db;

START TRANSACTION;

-- Categorías
INSERT INTO store_db.categotias (nombre_categoria, estado_categoria)
VALUES ('Electrónica', 1);
SET @categoria_electronica = LAST_INSERT_ID();

INSERT INTO store_db.categotias (nombre_categoria, estado_categoria)
VALUES ('Ropa', 1);
SET @categoria_ropa = LAST_INSERT_ID();

INSERT INTO store_db.categotias (nombre_categoria, estado_categoria)
VALUES ('Alimentos', 1);
SET @categoria_alimentos = LAST_INSERT_ID();

INSERT INTO store_db.categotias (nombre_categoria, estado_categoria)
VALUES ('Hogar', 1);
SET @categoria_hogar = LAST_INSERT_ID();

-- Productos
INSERT INTO store_db.productos
    (nombre_producto, precio, categoriaid, estado_producto)
VALUES
    ('Mouse inalámbrico',      15, @categoria_electronica, 1),
    ('Teclado USB',            25, @categoria_electronica, 1),
    ('Audífonos Bluetooth',    40, @categoria_electronica, 0),
    ('Camiseta de algodón',    12, @categoria_ropa,        1),
    ('Pantalón de mezclilla',  30, @categoria_ropa,        1),
    ('Chaqueta deportiva',    45, @categoria_ropa,        0),
    ('Arroz de 1 kg',           2, @categoria_alimentos,   1),
    ('Café molido de 500 g',    6, @categoria_alimentos,   1),
    ('Juego de vasos',         10, @categoria_hogar,       1),
    ('Lámpara de escritorio',  20, @categoria_hogar,       1);

COMMIT;