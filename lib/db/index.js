'use strict';

const Sequelize = require('sequelize');

let config = {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: console.log,
    benchmark: true,
    pool: {
        minConnections: 2,
        maxConnections: 5,
        maxIdleTime: 10000
    }
};

class DB {
    constructor() {
        let database = 'sequelize-migrator';
        let username = '';
        let password = '';

        return new Sequelize(database, username, password, config);
    }
}

module.exports = new DB();
