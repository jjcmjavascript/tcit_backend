const clientServices  = require("./services/client");  
const {server, express, app} = require("./services/server");
const router = require("../app/routes")(express);

server.use(router);

const client =  clientServices(app); 

describe('Posts endpoint', ()=>{
    test('it should response with status 200 and return list of posts', async()=>{
        const response = await client.get('/posts')
        .expect(200)
        .expect('Content-Type', /json/);
        
        expect(response.body).toEqual(expect.any(Array));
    }); 

    test('it should response with status 422 when request is empty', async()=>{
        const response = await client.post('/posts')
        .expect(422)
        .expect('Content-Type', /json/); 

        console.log(response.body);
    }); 
});  

afterAll(()=>{
    app.close();
}); 