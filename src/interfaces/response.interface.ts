export interface ResponseHttp{
    success: boolean;
    message: string;
    data?: any;
}

export interface ResponseHttpError{
    success: boolean;
    messages: string[];
    error?: any;
}