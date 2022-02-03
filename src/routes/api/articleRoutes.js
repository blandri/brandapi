import express from 'express';
import { ArticleController } from '../../controllers/articleController';
import multer from 'multer';
import { articleValidation } from '../../validations/articleValidation';
import { upload } from '../../middleware/multer';
import { authenticate } from '../../middleware/authenticate';

const articleController = new ArticleController();

const route = express.Router();
const storage = multer.diskStorage({});

route.get('/', authenticate, (req, res, next) => {
  articleController.getAllArticles(req, res, next);
});

route.post(
  '/',
  authenticate,
  upload.single('image'),
  articleValidation,
  (req, res, next) => {
    articleController.createArticle(req, res, next);
  }
);

route.get('/:id', (req, res, next) => {
  articleController.getArticle(req, res, next);
});

route.patch('/:id', authenticate, upload.single('image'), (req, res, next) => {
  articleController.updateArticle(req, res, next);
});

route.delete('/:id', authenticate, (req, res, next) => {
  articleController.deleteArticle(req, res, next);
});

export default route;
