import Comment from '../models/comment';

export class commentService {
  static async createComment(data) {
    const com = await Comment(data);
    return com.save();
  }

  static async getComment(articleId) {
    return await Comment.find({ articleId: articleId });
  }
}
