'use strict';

const sequelize = require('../db');
const Umzug = require('umzug');

module.exports = {
    getInstance: (tableName) => {
        const migrations = {
            path: `./lib/${tableName}/migrations/`,
            params: [sequelize.getQueryInterface(), sequelize.constructor, () => {
                throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
            }]
        };
        const storage = 'json';
        const storageOptions = { path: `${process.cwd()}/db/${tableName}.json` };
        
        return new Umzug({ migrations, storage, storageOptions });
    }
};
