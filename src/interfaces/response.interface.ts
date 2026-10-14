export interface ResponseHttp{
    success: boolean;
    message: string;
    data?: any;
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