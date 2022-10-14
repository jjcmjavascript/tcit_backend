const client  = require("./services/client");  
const {server, express, app} = require("./services/server");

const newClient =  client(app); 

describe('Posts endpoint', ()=>{
    test('it should response with status 200 and return list of post', async()=>{
        const response = await newClient.get('/posts')
        .expect(200)
        .expect('Content-Type', /json/);

        expect(response.body).toEqual(expect.any(Array));
    }); 
});  

afterAll(()=>{
    app.close();
}); 