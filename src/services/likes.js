import Likes from '../models/like';

export class likeServices {
  static async createLike(data) {
    return await data.save();
  }
}
