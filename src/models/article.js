import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
  author: { type: String, default: 'Landry' },
  title: { type: String, required: true },
  content: { type: String, required: true },

  image: String,
  likes: { type: Number, default: 0 },
  created_on: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);
export default Article;
