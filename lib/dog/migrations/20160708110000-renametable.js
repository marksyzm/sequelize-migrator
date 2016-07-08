'use strict';
const oldTableName = 'Dog';
const newTableName = 'Canine';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.renameTable(oldTableName, newTableName);
    },
    down: (queryInterface) => {
        return queryInterface.renameTable(newTableName, oldTableName);
    }
}
