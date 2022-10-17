'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profile', {
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('profile');
  },
};
