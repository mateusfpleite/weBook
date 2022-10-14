'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('already_read', {
      bookId: {
        field: 'book_id',
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'books',
          key: 'book_id'
        }
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('already_read');
  },
};
