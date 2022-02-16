import Likes from '../models/like';
import Article from '../models/article';

export class likeServices {
  static async createLike(data) {
    return await data.save();
  }

  static async getLikes(id) {
    return await Article.findOne({ articleid: id });
  }
}
