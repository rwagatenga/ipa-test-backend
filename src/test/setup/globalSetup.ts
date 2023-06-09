import { Sequelize } from 'sequelize';
import testSequelize from '../../config/testDatabase';
import { user, cleanUp } from '../../seeders';

const sequelize = async () => {};
async function prepareDBConnection() {
  await testSequelize.authenticate();
  await testSequelize.sync({ alter: true });
  await testSequelize.sync({ force: true });

  await cleanUp();

  await user.up();
}

module.exports = prepareDBConnection;
