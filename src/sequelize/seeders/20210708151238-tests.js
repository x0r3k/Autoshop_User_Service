const data = [{
  firstName: 'John',
  lastName: 'Doe',
  email: 'example@example.com',
}];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tests', data),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tests', null, {}),
};
