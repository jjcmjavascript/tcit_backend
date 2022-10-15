const resolver = require('./resolver')
const {routes: postRoutes} = require('../modules/posts');

module.exports = ({Router}) => {
    return resolver(Router(), [...postRoutes]);
}


