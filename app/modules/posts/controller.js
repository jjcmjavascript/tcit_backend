module.exports = (postService) =>{
    return {
        async getPosts(req, rest){
            const posts =  postService.findAll(); 
        },
        async createPost(req, res){
            
        },
        async deletePost(req, res){
            
        }
    }; 
}