

export class userServices {
  static async createUser(data) {
    return await data.save();
  }
}
