import express from 'express';
import { likeControll } from '../../controllers/likesController';

const route = express.Router();

route.post('/:articleid', new likeControll().createLike);
route.get('/:articleid', new likeControll().getLike);

export default route;
