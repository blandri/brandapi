import Article from '../models/article';
import { ArticleServices } from '../services/articleServices';
import { uploadFile } from '../helpers/fileUpload';

export class ArticleController {
  // TODO Don't access database from this file you only needs
  async createArticle(req, res, next) {
    try {
      req.body.image = await uploadFile(req);
      const data = new Article({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
      });
      if (!req.body.title) {
        res.status(400).send({ error: 'title cant be empty' });
      }
      const article = await ArticleServices.createArticle(data);
      res.status(201).send(article);
    } catch (error) {
      res.status(204);
      res.send({ error: 'No article created' });
    }
  }
  async getAllArticles(req, res, next) {
    try {
      const articles = await ArticleServices.getAllArticles();
      res.status(200).send(articles);
    } catch (error) {
      res.status(204).send({ error: 'no articles here' });
    }
  }
  async getArticle(req, res, next) {
    try {
      const article = await ArticleServices.getArticle(req.params.id);
      res.send(article);
    } catch (error) {
      res.status(204).send({ error: 'please enter a correct id' });
    }
  }
  async updateArticle(req, res, next) {
    try {
      req.body.image = await uploadFile(req);
      const data = {};
      if (req.body.title) {
        data['title'] = req.body.title;
      }
      if (req.body.content) {
        data['content'] = req.body.content;
      }

      if (req.body.image) {
        data['image'] = req.file.image;
      }

      const article = await ArticleServices.updateArticle(req.params.id, data);
      res.status(201).send(article);
    } catch (error) {
      res.status(204).send({ error: "Article doesn't exist!" });
    }
  }
  async deleteArticle(req, res, next) {
    try {
      await ArticleServices.deleteArticle(req.params.id);

      res.status(202).send({ message: 'deleted successfully' });
    } catch {
      res.status(204, 'no article').send({ error: "Article doesn't exist!" });
    }
  }
}
