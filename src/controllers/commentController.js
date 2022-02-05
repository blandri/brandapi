import Comment from '../models/comment';

import { commentService } from '../services/commentServices';

export class commentControll {
  async createComment(req, res) {
    const data = new Comment({
      name: req.body.name,
      comment: req.body.comment,
    });
    const comm = await commentService.createComment(data);
    res.send(comm);
  }

  async getAllComments(req, res) {
    try {
      const comm = await commentService.getAllComments(req.params.id);
      res.send(comm);
    } catch (error) {
      res.status(401).send({ error: 'no comments sent yet' });
    }
  }
}
