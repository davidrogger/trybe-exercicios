'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Employees',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'first_name',
        },
        age: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      });
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.dropTable('Employees');
  }
};
