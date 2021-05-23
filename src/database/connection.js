const Sequelize = require('sequelize')

const path = 'mariadb://root@localhost:3306/delilah';
const sequelize = new Sequelize( path, {operatorAliases: false});


module.exports = sequelize;