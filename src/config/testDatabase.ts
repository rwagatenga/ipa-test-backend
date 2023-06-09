import { Sequelize } from 'sequelize';

const {
  TEST_DB_NAME,
  TEST_DB_USERNAME,
  TEST_DB_PASSWORD,
  TEST_DB_HOST,
  TEST_DB_PORT,
} = process.env;

const testSequelize = new Sequelize({
  dialect: 'mysql', // replace with your database dialect
  database: TEST_DB_NAME || 'testMyDb', // replace with your database name
  username: TEST_DB_USERNAME || 'root', // replace with your database username
  password: TEST_DB_PASSWORD || '', // replace with your database password
  host: TEST_DB_HOST || 'localhost', // replace with your database host
  port: parseInt(TEST_DB_PORT || '3306', 10), // replace with your database port
  define: {
    timestamps: true,
    underscored: false,
  },
});

export default testSequelize;
