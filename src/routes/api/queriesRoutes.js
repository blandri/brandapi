import express from 'express';
import { QuerryController } from '../../controllers/queriesController';

const route = express.Router();

route.post('/', new QuerryController().createQuerry);

route.get('/id:', new QuerryController().getQuerry);

export default route;
