export class ValidationsBase {
    nullOrUndefined(value: any): boolean {
        return value === null || value === undefined;
    }

    emptyString(value: string): boolean {
        return value.trim() === '';
    }

    isNumber(value: any): boolean {
        return typeof value === 'number' && !isNaN(value);
    }

    isPositiveNumber(value: number): boolean {
        return this.isNumber(value) && value > 0;
    }

    expressionTest(value: string, regex: RegExp): boolean {
        return regex.test(value);
    }
}