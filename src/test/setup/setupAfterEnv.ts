import app from '../../../app'; // your Express app instance
import sequelize from '../../config/database'; // your Sequelize instance

jest.setTimeout(150000);

// Make sure to sync the Sequelize models before running the tests
beforeAll(async () => {
  await sequelize.sync({ force: true });
});

// Close the Sequelize connection after running the tests
afterAll(async () => {
  await sequelize.close();
});

module.exports = {
  app,
};
