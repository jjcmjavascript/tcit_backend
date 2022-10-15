const joi = require('joi');

const schema = joi.object({
    name : joi.string().required().pattern(/^[\w|\s]+$/).min(3).max(30),
    description : joi.string().required().pattern(/^[\w|\s]+$/).min(3).max(250),
});

module.exports = schema;
