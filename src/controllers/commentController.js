import Comment from '../models/comment';
import Article from '../models/article';
import { commentService } from '../services/commentServices';

export class commentControll {
  async createComment(req, res) {
    try {
      const idd = await Article.find({ _id: req.params.articleid });
      if (!idd[0]) {
        res.status(404).send({ error: 'enter correct article id' });
      } else if (!req.body.name) {
        res.status(404).send({ error: 'enter name' });
      } else if (!req.body.comment) {
        res.status(404).send({ error: 'enter comment' });
      } else {
        const data = new Comment({
          articleId: req.params.articleid,
          name: req.body.name,
          comment: req.body.comment,
        });
        const comm = await commentService.createComment(data);
        res.send(comm);
        //console.log(idd);
      }
    } catch (error) {
      res.status(404).send({ error: 'not found' });
    }
  }

  async getComment(req, res) {
    try {
      const comm = await commentService.getComment(req.params.articleid);
      if (!comm[0]) {
        res.status(404).send({ error: 'enter correct article id' });
      } else {
        res.send(comm);
      }
    } catch (error) {
      res.status(404).send({ error: 'not found' });
    }
  }
}
