require("dotenv").config();
const {express, server} = require("./app/services/server");
const routes = require("./app/routes")(express);
const {notFound} = require("./app/middlewares")

try {
    server.use(routes);
    server.use('*', notFound);
    server.listen(process.env.APP_PORT || 0, function(){
        console.log(`Server is listening on port ${this.address().port}`);
    });
}
catch(err){
   console.error(err);
}