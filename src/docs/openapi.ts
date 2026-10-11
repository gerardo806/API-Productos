export const openApiSpec = {
    openapi: '3.1.0',
    info: {
        title: 'API de Productos',
        version: '1.0.0'
    },
    servers: [{ url: 'http://localhost:5000' }],
    paths: {
        '/api/products/list': {
            get: {
                summary: 'Listar productos',
                responses: {
                    '200': {
                        description: 'Lista de productos',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { type: 'object' }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};