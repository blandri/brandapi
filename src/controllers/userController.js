import { userExist, userServices } from '../services/userServices';
import User from '../models/user';
import { comparePassword, hashPassword } from '../helpers/password';
import { generateToken } from '../helpers/jwtFunctions';

export class userController {
  async createUser(req, res) {
    try {
      const exist = await userExist(req.body.email);
      if (exist) {
        res.status(208).send({ error: 'the user already exists' });
      } else {
        const data = new User({
          email: req.body.email,
          password: await hashPassword(req.body.password),
        });
        const usr = await userServices.createUser(data);
        res.status(201).send(usr);
      }
    } catch (error) {
      res.status(406);
      res.send({ error: 'failed to sign you up' });
    }
  }

  async Login(req, res) {
    try {
      const exist = await userExist(req.body.email);
      const valid = await comparePassword(req.body.password, exist.password);
      if (exist && valid) {
        const token = await generateToken({ _id: exist.id });
        res.send({
          status: 200,
          message: 'Logged in successfully',
          accessToken: token,
        });
      } else {
        res.status(401).send({ error: 'invalid credentials' });
      }
    } catch (error) {
      res.status(401).send({ error: 'invalid credentials' });
    }
  }
  async getUser(req, res) {
    try {
      const usr = await userServices.getUsers();
      res.send(usr);
    } catch (error) {
      res.status(204).send({ error: 'no users' });
    }
  }
}
