module.exports = (schema, where)=>{
    return async (req, res, next) => {
        try {
            await schema.validateAsync((req[where] || {}), { abortEarly: false });
            next();
        }
        catch(error){
            const errors = error.details.map((err) => err.message);
            return res.status(422).json({errors: errors});
        }
    }
};