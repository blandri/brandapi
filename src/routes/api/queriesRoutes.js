import express from 'express';
import { QuerryController } from '../../controllers/queriesController';

const route = express.Router();

route.post('/', new QuerryController().createQuerry);

route.get('/', new QuerryController().getAllQuerry);

export default route;
