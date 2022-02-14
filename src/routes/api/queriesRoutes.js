import express from 'express';
import { QuerryController } from '../../controllers/queriesController';
import { authenticate } from '../../middleware/authenticate';

const route = express.Router();

route.post('/', new QuerryController().createQuerry);

route.get('/', authenticate, new QuerryController().getAllQuerry);

route.delete('/:id', new QuerryController().deleteQuerry);

export default route;
