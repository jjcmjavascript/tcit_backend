const express = require('express');
const server = express();
const helmet = require("helmet");
const cors = require("cors");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

module.exports = {
    server,
    express
};