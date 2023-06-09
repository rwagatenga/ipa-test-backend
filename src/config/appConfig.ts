export const appConfig = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'myuser',
    password: process.env.DB_PASSWORD || 'mypassword',
    database: process.env.DB_NAME || 'mydb',
  },
  api: {
    prefix: '/api',
    version: 'v1',
  },
  auth: {
    secret: process.env.JWT_SECRET || 'mysecret',
    expiresIn: '1d',
  },
};
