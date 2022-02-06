import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();

const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV || 'development';

try {
  if (mode === 'development') {
    mongoose.connect(process.env.DEVELOPMENT_DB, {
      useNewUrlParser: true,
    });
  } else if (mode === 'test') {
    mongoose.connect(process.env.TEST_DB, {
      useNewUrlParser: true,
    });
  } else if (mode === 'production') {
    mongoose.connect(process.env.PRODUCTION_DB, {
      useNewUrlParser: true,
    });
  }
  app.use(express.json());
  app.use(cors());
  app.use(morgan('dev'));

  app.get('/', (req, res) => {
    res.send({ message: 'welcome to the api' });
  });
  app.get('', (req, res, next) => {
    res.status(404).json({
      error: 'Page not found',
    });
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use('/api/v1/', routes);
  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}

export default app;
