import express from 'express';
import { commentControll } from '../../controllers/commentController';

const route = express.Router();
const commentsController = new commentControll();
route.post('/:articleid', commentsController.createComment);
route.get('/', commentsController.getAllComments);

export default route;
