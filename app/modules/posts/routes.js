module.exports = (controller)=>{
    return [
        {
            method: 'get',
            path: '/posts',
            handler: async (req, res)=> controller.getPosts(req, res),
        },
        {
            method: 'post',
            path: '/posts',
            handler: async (req, res)=> controller.createPost(req, res),
        },
        {
            method: 'delete',
            path: '/posts/:id',
            handler: async (req, res)=> controller.deletePost(req, res),
        }
    ]; 
}