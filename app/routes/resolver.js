module.exports = (router, routes) => {
    routes.forEach((route) => {
        const { method, middlewares, path, handler } = route;
        
        const methods = Array.isArray(middlewares) ? [...middlewares, handler] : [handler]; 

        router[method](path, ...methods);
    });
    
    return router;
}