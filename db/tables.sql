CREATE TABLE store_db.categotias (
	categoriaId INT auto_increment PRIMARY KEY,
	nombre_categoria varchar(100) NOT NULL,
	estado_categoria INT DEFAULT 1 NOT NULL
)
ENGINE=InnoDB;

CREATE TABLE store_db.productos (
	productid INT auto_increment NOT NULL,
	nombre_producto varchar(100) NOT NULL,
	precio DECIMAL NOT NULL,
	categoriaid INT NOT NULL,
	estado_producto INT DEFAULT 1 NOT NULL,
	CONSTRAINT productos_pk PRIMARY KEY (productid),
	CONSTRAINT productos_categorias_FK FOREIGN KEY (categoriaid) REFERENCES store_db.categotias(categoriaId)
)
ENGINE=InnoDB;

ALTER TABLE store_db.productos
MODIFY COLUMN precio DECIMAL(10,2) NOT NULL;