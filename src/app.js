import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import 'dotenv/config';

const app = express();

const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV || 'development';
const server = async () => {
  try {
    if (mode === 'development') {
      await mongoose.connect('mongodb://127.0.0.1:27017/devdb', {
        useNewUrlParser: true,
      });
    } else if (mode === 'test') {
      await mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
        useNewUrlParser: true,
      });
    } else if (mode === 'production') {
      await mongoose.connect(
        'mongodb+srv://landry:mongodb@cluster0.2qprh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/proddb',
        {
          useNewUrlParser: true,
        }
      );
    }
    app.use(express.json());
    app.use('/api/v1/', routes);
    app.listen(port, () => {
      console.log(`The server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
