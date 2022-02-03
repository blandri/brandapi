import Comment from '../models/comment';

export class commentService {
  async createComment(data) {
    return await data.save();
  }
}
