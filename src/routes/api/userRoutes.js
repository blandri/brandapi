import express from 'express';
import User from '../../models/user';
import { userController } from '../../controllers/userController';
import { userValideation } from '../../validations/articleValidation';

const route = express.Router();

route.get('/all', (req, res, next) => {
  new userController().getUser(req, res);
});

route.post('/register', userValideation, (req, res, next) => {
  new userController().createUser(req, res);
});

route.post('/login', userValideation, (req, res, next) => {
  new userController().Login(req, res);
});

export default route;
