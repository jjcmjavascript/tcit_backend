module.exports = (_ , res)=>{
    res.status(404).json({
        errors: ['Not Found']
    });
}