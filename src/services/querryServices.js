import res from 'express/lib/response';
import Querry from '../models/query';

export class QuerryServices {
  static async createQuerry(data) {
    return await data.save();
  }

  static async getAllQuerry() {
    const querries = await Querry.find();
    return querries;
  }

  static async getQuerry() {
    const querry = await Querry.find({ _id: id });
    return querry;
  }
}
