'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        field: 'first_name',
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING,
      },
      profilePicture: {
        field: 'profile_picture',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
