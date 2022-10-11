'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('staff', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('staff');
  },
};
