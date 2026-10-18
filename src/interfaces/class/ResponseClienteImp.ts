import type { ResponseCliente, ResponseHttp } from "../response.interface.js";

export class ResponseClienteImp implements ResponseCliente {
    success: boolean;
    message: string;
    data?: any;

    constructor(success: boolean, message: string, data?: any) {
        this.success = success;
        this.message = message;
        this.data = data;
    }

    static GetResponseClient(res: ResponseHttp): ResponseCliente {
        return {
            success: res.success,
            message: res.message,
            data: res.data
        };
    }
}