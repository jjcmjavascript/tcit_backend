module.exports = (router, routes) => {
    routes.forEach((route) => {
        const { method, path, handler } = route;
        router[method](path, handler);
    });
    
    return router;
}