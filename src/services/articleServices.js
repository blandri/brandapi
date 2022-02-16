//import the model you need to access
import Article from '../models/article';

export class ArticleServices {
  static async createArticle(data) {
    return await data.save();
  }
  static async getAllArticles() {
    const articles = await Article.find();
    return articles;
  }
  static async getArticle(id) {
    const article = await Article.findOne({ _id: id });
    return article;
  }
  static async updateArticle(id, data) {
    const article = await Article.findOne({ _id: id });
    if (data.title) {
      article.title = data.title;
    }
    if (data.content) {
      article.content = data.content;
    }

    if (data.image) {
      article.image = data.image;
    }

    await article.save();
    return article;
  }
  static async deleteArticle(id) {
    return await Article.deleteOne({ _id: id });
  }

  static async Like(id) {
    return Article.findOneAndUpdate({ _id: id });
  }
}
