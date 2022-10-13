'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      bookId: {
        type: Sequelize.STRING,
        field: 'book_id',
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bookPicture: {
        type: Sequelize.STRING,
        field: 'book_picture',
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('books');
  },
};
