import { userServices } from '../services/userServices';
import User from '../models/user';

export class userController {
  async createUser(req, res) {
    try {
      const data = new User({
        email: req.body.email,
        password: req.body.password,
      });
      const usr = await userServices.createUser(data);
      res.send(usr);
    } catch (error) {
      res.status(404);
      res.send({ error: 'failed to create' });
    }
  }

  async Login(req,res){
     try {
         
     } catch (error) {
         res.status(409).send({error:'invalid credentials'})
     }
  }
}
