import mongoose from 'mongoose';

const Like = mongoose.Schema({
  articleid: String,
});

const Likes = mongoose.model('Like', Like);
export default Likes;
