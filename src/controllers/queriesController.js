import Querry from '../models/query';
import { QuerryServices } from '../services/querryServices';

export class QuerryController {
  async createQuerry(req, res) {
    try {
      if (!req.body.email) {
        res.status(404).send({ error: 'enter email' });
      } else if (!req.body.message) {
        res.status(404).send({ error: 'enter message' });
      } else if (!req.body.location) {
        res.status(404).send({ error: 'enter location' });
      } else {
        const data = new Querry({
          email: req.body.email,
          message: req.body.message,
          location: req.body.location,
        });
        const Querr = await QuerryServices.createQuerry(data);
        res.status(201).send(Querr);
      }
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

  async deleteQuerry(req, res) {
    try {
      const quer = await QuerryServices.deleteQuerry(req.params.id);
      res.send({ status: 200, message: 'deleted successfully' });
    } catch (error) {
      res.status(404).send({ error: 'failed' });
    }
  }
}
