import express from 'express';
import { commentControll } from '../../controllers/commentController';
import { commentValidation } from '../../validations/articleValidation';

const route = express.Router();
const commentsController = new commentControll();

route.post('/:articleid', commentsController.createComment);
route.get('/:articleid', commentsController.getComment);

export default route;
