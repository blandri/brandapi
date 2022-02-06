import Comment from '../models/comment';

export class commentService {
  static async createComment(data) {
    return await data.save();
  }

  static async getAllComments(id) {
    return await Comment.findOne();
  }
}
