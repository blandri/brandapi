import { likeServices } from '../services/likes';
import Likes from '../models/like';
import Article from '../models/article';
import { ArticleServices } from '../services/articleServices';

export class likeControll {
  async createLike(req, res) {
    try {
      const art = await Article.findOne({ _id: req.params.articleid });
      const lik = new Likes({
        articleid: req.params.articleid,
      });
      art.likes += 1;
      const li = await likeServices.createLike(lik);
      const artt = await ArticleServices.createArticle(art);
      res.status(200).send(artt);
    } catch (error) {
      res.status(404).send({ error: 'not found' });
    }
  }

  async getLike(req, res) {
    try {
      const lik = await likeServices.getLikes(req.params.articleid);
      res.status(200).send(lik);
    } catch (error) {
      res.status(404).send({ error: 'not found' });
    }
  }
}
