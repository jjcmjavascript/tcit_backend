const supertest = require("supertest");

module.exports = (server)=>{
    return supertest(server);
} 