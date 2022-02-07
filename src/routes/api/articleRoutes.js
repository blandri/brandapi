import express from 'express';
import { ArticleController } from '../../controllers/articleController';
import multer from 'multer';
import { articleValidation } from '../../validations/articleValidation';
import { fileFilter } from '../../helpers/fileUpload';
import { authenticate } from '../../middleware/authenticate';

const articleController = new ArticleController();

const route = express.Router();
const storage = multer.diskStorage({});
const uploads = multer({ storage, fileFilter });

route.get('/', articleController.getAllArticles);

route.post(
  '/',

  authenticate,

  uploads.single('image'),
  articleValidation,

  articleController.createArticle
);

route.get('/:id', articleController.getArticle);

route.patch(
  '/:id',

  authenticate,


  


  uploads.single('image'),
  articleController.updateArticle
);

route.delete('/:id', articleController.deleteArticle);

export default route;
