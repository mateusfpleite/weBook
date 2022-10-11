'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('is_reading', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      bookId: {
        field: 'book_id',
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: {
          table: 'books',
          field: 'book_id',
        },
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: {
          table: 'users',
          field: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('is_reading');
  },
};
