import type { ProductWithCategory } from "../interfaces/product.interface.js";
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

    isValidPrice(value: any): boolean {
        return this.isPositiveNumber(value);
    }

    validate(): boolean {
        const nameValid = this.isValidProductName(this.product.nombre_producto);
        const priceValid = this.isValidPrice(this.product.precio);
        const categoryIdValid = this.isValidCategoryId(this.product.categoriaid);
        
        if (!nameValid || !priceValid || !categoryIdValid) {
            return false;
        }
        return true;
    }
}