import { z } from "zod";
import type { CreateProductDto } from "../creat.product.js";
import type { NewProduct } from "../../interfaces/product.interface.js";
import type { ModelData } from "../../interfaces/response.interface.js";

export class NewProductClass {
    private dto: any;
    constructor(product: CreateProductDto){
        this.dto = z.object({
            nombre_producto: z.string().min(1, { message: "El nombre del producto es requerido" }),
            precio: z.number().positive({ message: "El precio debe ser un número positivo" }),
            categoriaid: z.number().int().positive({ message: "El ID de la categoría debe ser un número entero positivo" })
        }).safeParse(product);
    }

    public getProduct(): ModelData<NewProduct> {
        const result: ModelData<NewProduct> = {
            success: false,
            message: "",
        };

        //validate the product data using zod schema
        if (!this.dto.success) {
            const errors = this.dto.error.flatten().fieldErrors;
            result.message = errors;
        } else {
            result.success = true;
            const productDto: CreateProductDto = this.dto.data;
            const newProducto: NewProduct = {
                nombre_producto: productDto.nuevo_producto,
                precio: productDto.precio,
                categoriaid: productDto.categoriaid,
                constructor: {
                    name: 'RowDataPacket'
                }
            }
            result.data = newProducto;
        }

        return result;
    }
}