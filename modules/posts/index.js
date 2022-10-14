const postService = require('./services');
const postController = require('./controller')(postService);
const routes = require('./routes')(postController);

module.exports = {
    routes 
}