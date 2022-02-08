import express from 'express';
import { commentControll } from '../../controllers/commentController';
import { commentValidation } from '../../validations/articleValidation';

const route = express.Router();
const commentsController = new commentControll();

route.post('/:articleid', commentValidation, commentsController.createComment);
route.get('/:articleid', commentValidation, commentsController.getComment);


export default route;
