import { likeServices } from '../services/likes';
import Likes from '../models/like';
import Article from '../models/article';

export class likeControll {
  async createLike(req, res) {
    try {
      const art = await Article.findOne({ _id: req.params.articleid });
      const lik = new Likes({
        articleid: req.params.articleid,
      });
      const li = await likeServices.createLike(lik);
      //res.status(200).send(li);
      console.log(li);
    } catch (error) {
      res.status(200).send({ error: 'not found' });
    }
  }
}
