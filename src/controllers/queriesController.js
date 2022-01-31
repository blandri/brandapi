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
      res.send(Querr);
    } catch (error) {
      res.status(404).send({ error: 'no Querry created yet' });
    }
  }

  async getAllQuerrie(req, res) {
    try {
      const querries = await QuerryServices.getAllQuerry();
      res.send(querries);
    } catch (error) {
      res.status(404).send({ error: 'no Querries here' });
    }
  }

  async getQuerry(req, res) {
    try {
      const querry = await QuerryServices.getQuerry(req.params.id);
      res.send(querry);
    } catch (error) {
      res.status(404).send({ error: 'Querry doesnt exist' });
    }
  }
}
