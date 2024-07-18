'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
    {
      nome: 'Carlos',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'John',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Jonas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
