import Comment from '../models/comment';

import { commentService } from '../services/commentServices';

export class commentControll {
  async createComment(req, res) {
    try {
      const data = new Comment({
        articleId: req.params.articleid,
        name: req.body.name,
        comment: req.body.comment,
      });
      const comm = await commentService.createComment(data);
      res.send(comm);
    } catch (error) {
      res.status(204).send({ error: 'failed to create' });
    }
  }

  async getComment(req, res) {
    try {
      const comm = await commentService.getComment(req.params.articleid);
      res.send(comm);
    } catch (error) {
      res.status(401).send({ error: 'no comments sent yet' });
    }
  }
}
