import express from 'express';
import { ArticleController } from '../../controllers/articleController';
import multer from 'multer';

/*let fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file', false);
  }
};*/
const articleController= new ArticleController()

const route = express.Router();
const storage = multer.diskStorage({});
const uploads = multer({ storage: storage});

route.get('/', (req, res, next) => {
  articleController.getAllArticles(req, res, next);
});

route.post('/', uploads.single('image'), (req, res, next) => {
  articleController.createArticle(req, res, next);
});

route.get('/:id', (req, res, next) => {
  articleController.getArticle(req, res, next);
});

route.patch('/:id', uploads.single('image'), (req, res, next) => {
  articleController.updateArticle(req, res, next);
});

route.delete('/:id', (req, res, next) => {
  articleController.deleteArticle(req, res, next);
});

export default route;
