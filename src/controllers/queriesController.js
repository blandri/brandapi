import Querry from '../models/query';
import { QuerryServices } from '../services/querryServices';

export class QuerryController {
  async createQuerry(req, res) {
    try {
      const data = new Querry({
        email: req.body.email,
        message: req.body.message,
      });

      const Querr = await QuerryServices.createQuerry(data);
      res.status(201).send(Querr);
    } catch (error) {
      res.status(204).send({ error: 'no Querry created yet' });
    }
  }

  async getAllQuerry(req, res) {
    try {
      const querry = await QuerryServices.getAllQuerry();
      res.send(querry);
    } catch (error) {
      res.status(204).send({ error: 'no querries here' });
    }
  }
}
