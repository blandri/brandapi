import express from 'express';
import { ArticleController } from '../../controllers/articleController';
import multer from 'multer';
import { articleValidation } from '../../validations/articleValidation';
import { upload } from '../../middleware/multer';
import { authenticate } from '../../middleware/authenticate';

const articleController = new ArticleController();

const route = express.Router();
const storage = multer.diskStorage({});

route.get('/',articleController.getAllArticles);

route.post(
  '/',
  authenticate,
  upload.single('image'),
  articleValidation,

  articleController.createArticle
);

route.get('/:id', articleController.getArticle);

route.patch(
  '/:id',
  authenticate,
  upload.single('image'),
  articleController.updateArticle
);

route.delete('/:id', authenticate, articleController.deleteArticle);

export default route;
