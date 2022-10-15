const db = require('../../services/database');
const validation = require('../../middlewares/validation');
const postService = require('./services/post')(db);
const postController = require('./controller')(postService);
const createSchema = require('./schemas/createSchema');
const deleteSchema = require('./schemas/deleteSchema');

const middlewares = {
    create:  [validation(createSchema, 'body')],
    
    delete: [validation(deleteSchema, 'params')],
}

const routes = require('./routes')(postController, middlewares);

module.exports = {
    routes 
}