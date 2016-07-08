'use strict';
const tableName = 'Cat';
const columnName = 'food';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(tableName, columnName, Sequelize.STRING);
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn(tableName, columnName);
    }
}
