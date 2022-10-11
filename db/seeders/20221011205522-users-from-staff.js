'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Leonardo',
          last_name: 'Guimarães Urci',
          email: 'leonardoguimaraesurci@gmail.com',
          password: 'Leonardo@123',
          profile_picture: null,
        },
        {
          first_name: 'Mateus',
          last_name: 'Felipe Leite',
          email: 'mateusfpleite@gmail.com',
          password: 'Mateus@123',
          profile_picture: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
