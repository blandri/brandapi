import mongoose from 'mongoose';

const querrySchema = mongoose.Schema({
  email: String,
  message: String,
  location: String,
  date: { type: Date, default: Date.now },
});

const Querry = mongoose.model('Querry', querrySchema);
export default Querry;
