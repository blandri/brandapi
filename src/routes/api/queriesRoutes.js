import express from 'express';
import { QuerryController } from '../../controllers/queriesController';

const route = express.Router();

route.post('/', new QuerryController().createQuerry);

route.get('/', new QuerryController().getAllQuerry);

route.delete('/:id', new QuerryController().deleteQuerry);

export default route;
