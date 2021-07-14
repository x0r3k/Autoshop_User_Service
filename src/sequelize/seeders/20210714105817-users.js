const data = [{
  firstName: 'John',
  lastName: 'Doe',
  email: 'example@example.com',
}];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', data),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
