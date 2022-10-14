const express = require('express');

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

const app = server.listen(process.env.APP_PORT || 0, ()=>{
    console.log(`Server is listening on port ${app.address().port}`);
});

module.exports = {
    app, 
    server,
    express
}; 