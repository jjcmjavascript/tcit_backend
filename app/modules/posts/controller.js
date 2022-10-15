module.exports = (postService) =>{
    return {
        async getPosts(_, res){
            try{
                const posts = await postService.findAll();
                
                return res.status(200).json(posts);
            }
            catch(err){ 
                return res.status(400).json(err);
            }
        },
        
        async createPost(req, res){
            const post = await postService.create(req.body);

            return res.status(201).json(post);
        },

        async deletePost(req, res){
           try {
                const isDeleted = await postService.delete(req.params.id);

                return res.status(200).json(isDeleted);
           }
           catch(e){
                return res.status(404).json({error: e.message});
           }
        }
    }; 
}