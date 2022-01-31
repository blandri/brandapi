import express from 'express';
import User from '../../models/user';
import { userController } from '../../controllers/userController';

const route = express.Router();

route.get('/', (req, res, next) => {
  res
    .status(200)
    .json({ status: 200, message: 'this will return all users', data: '' });
});

route.post('/register', (req, res, next) => {
  new userController().createUser(req, res);
});

export default route;
