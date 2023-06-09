import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize({
  dialect: 'mysql', // replace with your database dialect
  database: DB_NAME || 'mydb', // replace with your database name
  username: DB_USERNAME || 'root', // replace with your database username
  password: DB_PASSWORD || '', // replace with your database password
  host: DB_HOST || 'localhost', // replace with your database host
  port: parseInt(DB_PORT || '3306', 10), // replace with your database port
  define: {
    timestamps: true,
    underscored: false,
  },
});

export default sequelize;
