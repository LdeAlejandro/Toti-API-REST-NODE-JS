'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tasks', [{
      description: 'Lavar louça',
      done: false,
      createdAt: new Date(), // Define a data e hora atual como a data de criação do registro.
      updatedAt: new Date()  // Define a data e hora atual como a data de última atualização do registro.
    }, {
      description: 'Comprar Pão',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      description: 'Jogar lixo fora',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
