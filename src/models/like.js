import mongoose from 'mongoose';

const Like = mongoose.Schema({
  articleid: String,
  number: { type: String, default: 0 },
});

const Likes = mongoose.model('Like', Like);
export default Likes;
