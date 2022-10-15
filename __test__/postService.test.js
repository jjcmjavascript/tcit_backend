const db = require("../app/services/database");   
const postService = require('../app/modules/posts/services/post')(db);

describe('Posts services:', ()=>{
    const fakePostModel = {
        name: "test post name",
        description: "test post description" 
    }; 
    
    test("it should return array with post", async ()=>{
        const posts= await postService.findAll();
        
        expect(posts).toEqual(expect.any(Array));
    }); 

    test("it should create a new post and destroy it", async ()=>{
        const newPost = await postService.create(fakePostModel);
        
        expect(newPost.name).toEqual(fakePostModel.name);

        const isDeleted = await postService.delete(newPost.id);

        expect(Boolean(isDeleted) === true).toBe(true);
    }); 
}); 
