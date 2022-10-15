const db = require('../../services/database');
const postService = require('./services/post')(db);
const postController = require('./controller')(postService);
const routes = require('./routes')(postController);

module.exports = {
    routes 
}