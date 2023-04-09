const Sequelize = require('sequelize');

// Conexão com a Base de Dados
const sequelize = new Sequelize('postapp', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};