const joi = require('joi');

const schema = joi.object({
    id : joi.number().required().min(1),
});

module.exports = schema;
