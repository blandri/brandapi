import express from 'express';
import { QuerryController } from '../../controllers/queriesController';

const route = express.Router();

route.get('/', (req, res) => {
  new QuerryController().getAllQuerrie(req, res);
});

route.post('/', (req, res) => {
  new QuerryController().createQuerry(req, res);
});

route.get('/id:', (req, res) => {
  new QuerryController().getQuerry(req, res);
});

export default route;
