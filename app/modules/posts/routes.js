module.exports = (controller, middlewares)=>{
    return [
        {
            method: 'get',
            path: '/posts',
            handler: async (req, res)=> controller.getPosts(req, res),
        },
        {
            method: 'post',
            path: '/posts',
            middlewares: middlewares.create,
            handler: async (req, res)=> controller.createPost(req, res),
        },
        {
            method: 'delete',
            path: '/posts/:id',
            middlewares: middlewares.delete,
            handler: async (req, res)=> controller.deletePost(req, res),
        }
    ]; 
}