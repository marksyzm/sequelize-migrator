'use strict';
const tableName = 'Cat';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(
            tableName,
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: Sequelize.DATE
                },
                updatedAt: {
                    type: Sequelize.DATE
                },
                attr1: Sequelize.STRING,
                attr2: Sequelize.INTEGER,
                attr3: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                    allowNull: false
                }
            },
            {
                charset: 'utf8' // default: null
            }
        );
    },
    down: function (queryInterface) {
        return queryInterface.dropTable(tableName);
    }
}
