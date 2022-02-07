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
      res.send(articles);
    } catch (error) {
      res.status(204).send({ error: 'no articles here' });
    }
  }
  async getArticle(req, res, next) {
    try {
      const article = await ArticleServices.getArticle(req.params.id);
      res.send(article);
    } catch (error) {
      res.status(404).send({ error: 'Error! try again' });
    }
  }
  async updateArticle(req, res, next) {
    try {
      const data = {};
      if (req.body.title) {
        data['title'] = req.body.title;
      }
      if (req.body.content) {
        data['content'] = req.body.content;
      }

      if (req.body.image) {
        data['image'] = req.file.path;
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
      res.status(202).send();
    } catch {
      res.status(204, 'no article').send({ error: "Article doesn't exist!" });
    }
  }
}
