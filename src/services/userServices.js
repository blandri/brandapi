import User from '../models/user';

export const userExist = async (email) => {
  const user = await User.findOne({ email: email });
  if (user) {
    return user;
  } else {
    return false;
  }
};

export class userServices {
  static async createUser(user) {
    const userCreated = await User(user);
    userCreated.save();
    return userCreated;
  }

  static async getUsers() {
    const usr = await User.find();
    return usr;
  }
}
