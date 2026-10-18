export interface ResponseCliente{
    success: boolean;
    message: string;
    data?: any;
}

export interface ResponseHttp extends ResponseCliente{
    statusCode: number;
}

export interface ResponseHttpError{
    success: boolean;
    messages: string[];
    error?: any;
}

export interface ModelData<T> {
    success: boolean;
    message: string;
    data?: T;
}