'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'staff',
      [
        {
          user_id: 1,
        },
        {
          user_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('staff', null, {});
  },
};
