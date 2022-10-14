const { posts } = require('../../services/database');

module.exports = () => {
    return {
        async findAll(){
            return posts.findAll();
        },
        async create(post){
            return posts.create(post);
        },
        async delete(id){
            return posts.destroy({ where: { id } });
        }
    };
}