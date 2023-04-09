const database = require('./db');

const Post = database.sequelize.define('postagens', {
    titulo: {
        type: database.Sequelize.STRING
    },
    conteudo: {
        type: database.Sequelize.TEXT
    }
});

module.exports = Post;

// Post.sync();

// Postagem.create({
//     titulo: "Saber",
//     conteudo: "Não é sinonimo de tudo."
// });

// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.TEXT
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// });
// Usuario.sync();

// Usuario.create({
//     nome: "Vinícius",
//     sobrenome: "Rafael Prass",
//     idade: 24,
//     email: "vinicius_prass@hotmail.com"
// });

