const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'users2'
});

module.exports = db



