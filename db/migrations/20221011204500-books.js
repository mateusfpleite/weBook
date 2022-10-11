'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      bookId: {
        type: Sequelize.STRING,
        field: 'book_id'
      },
      title: {
        type: Sequelize.STRING,
      },
      bookPicture: {
        type: Sequelize.STRING,
        field: 'book_picture'
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  },
};
