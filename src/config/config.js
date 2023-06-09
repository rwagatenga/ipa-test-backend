const { config } = require('dotenv');

config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_URL } =
  process.env;

module.exports = {
  development: {
    // use_env_variable: true,
    database: DB_NAME || 'mydb',
    username: DB_USERNAME || 'root',
    password: DB_PASSWORD || '',
    host: DB_HOST || 'localhost',
    port: parseInt(DB_PORT || '3306', 10),
    url: `mysql://${DB_USERNAME}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    dialect: 'mysql',
  },
  test: {
    use_env_variable: true,
    database: DB_NAME || 'mydb',
    username: DB_USERNAME || 'root',
    password: DB_PASSWORD || '',
    host: DB_HOST || 'localhost',
    port: parseInt(DB_PORT || '3306', 10),
    url: `mysql://${DB_USERNAME}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    dialect: 'mysql',
  },
  production: {
    use_env_variable: true,
    database: DB_NAME || 'mydb',
    username: DB_USERNAME || 'root',
    password: DB_PASSWORD || '',
    host: DB_HOST || 'localhost',
    port: parseInt(DB_PORT || '3306', 10),
    url: `mysql://${DB_USERNAME}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    dialect: 'mysql',
  },
};
