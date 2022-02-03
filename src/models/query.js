import mongoose from 'mongoose';

const querrySchema = mongoose.Schema({
  email: String,
  message: String,
  location: { type: String, default: 'Rwanda' },
});

const Querry = mongoose.model('Querry', querrySchema);
export default Querry;
