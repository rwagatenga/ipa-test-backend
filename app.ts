import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
// import { setupSwagger } from './swagger';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import sequelize from './src/config/database';
import router from './src/routers';

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CAMIS API Documentation',
      version: '0.1.0',
      description:
        'This is CAMIS API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'IPA',
        url: 'https://ipa.com',
        email: 'info@ipa.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'My API Documentation',
      },
    ],
  },
  apis: ['./src/routers/*.ts', './src/models/*.ts'],
};

const specs = swaggerJsdoc(options);

// Connect to the database and start the server
(async () => {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Database connected!');

    // Sync the database models with the database
    await sequelize.sync({ alter: true });
    console.log('Database synchronized!');

    // setupSwagger(app);
    app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(specs, { explorer: true })
    );
    // Set up the API routes
    app.use(router);

    // Start the server
    const port = process.env.PORT || 8081;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();

export default app;
