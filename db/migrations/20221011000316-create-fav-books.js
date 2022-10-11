'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('favorite_books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bookPicture: {
        field: 'book_picture',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      bookId: {
        field: 'book_id',
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('favorite_books');
  },
};
