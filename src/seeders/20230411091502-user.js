'use strict';
import userData from './Data/user';
import sequelize from '../config/database';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.changeColumn('users', 'createdAt', {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // });
    // await queryInterface.changeColumn('users', 'updatedAt', {
    //   type: Sequelize.DATE,
    //   allowNull: true,
    //   defaultValue: null,
    // });
    await sequelize.getQueryInterface().bulkInsert('users', userData, {});
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.changeColumn('users', 'createdAt', {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: null,
    // });
    // await queryInterface.changeColumn('users', 'updatedAt', {
    //   type: Sequelize.DATE,
    //   allowNull: true,
    //   defaultValue: null,
    // });
    await sequelize.getQueryInterface().bulkDelete('users', null, {});
  },
};
