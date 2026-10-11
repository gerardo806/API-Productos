import type { ProductWithCategory } from "../interfaces/product.interface.js";
import type { ResponseHttpError } from "../interfaces/response.interface.js";
import { ValidationsBase } from "./validations.base.js";

export class SaveProductValidation extends ValidationsBase {
    constructor(private product: ProductWithCategory) {
        super();
    }

    isValidCategoryId(value: any): boolean {
        return this.isPositiveNumber(value);
    }

    isValidProductName(value: string): boolean {
        return !this.nullOrUndefined(value) && !this.emptyString(value);
    }

    isValidProductNameFormat(value: string): boolean {
        const regex = /^[a-zA-Z0-9\s]+$/; // Alphanumeric and spaces
        return this.expressionTest(value, regex);
    }

    isValidPrice(value: any): boolean {
        return this.isPositiveNumber(value);
    }

    validate(): ResponseHttpError {
        const result: ResponseHttpError = {
            success: false,
            messages: [],
        };

        const nameValid = this.isValidProductName(this.product.nombre_producto);
        if (!nameValid) {
            result.messages.push('Invalid product name');
        }else{
            const nameFormatValid = this.isValidProductNameFormat(this.product.nombre_producto);
            if (!nameFormatValid) {
                result.messages.push('Product name format is invalid');
            }
        }
        
        const priceValid = this.isValidPrice(this.product.precio);
        if (!priceValid) {
            result.messages.push('Invalid product price');
        }

        const categoryIdValid = this.isValidCategoryId(this.product.categoriaid);
        if (!categoryIdValid) {
            result.messages.push('Invalid category ID');
        }

        if(result.messages.length === 0){
            result.success = true;
            result.messages.push('Product is valid');
        }

        return result;
    }
}