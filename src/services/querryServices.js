import res from 'express/lib/response';
import { Query } from 'mongoose';
import Querry from '../models/query';

export class QuerryServices {
  static async createQuerry(data) {
    return await data.save();
  }

  static async getAllQuerry() {
    const querries = await Querry.find();
    return querries;
  }

  static async deleteQuerry(id) {
    const quer = await Querry.deleteOne({_id:id});
    return quer;
  }
}
