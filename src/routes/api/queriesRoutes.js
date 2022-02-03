import express from 'express';
import { QuerryController } from '../../controllers/queriesController';

const route = express.Router();

route.get('/', new QuerryController().getAllQuerrie);

route.post('/', new QuerryController().createQuerry);

route.get('/id:', new QuerryController().getQuerry);

export default route;
