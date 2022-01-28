import mongoose from 'mongoose';

const QuerryModel = mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
  location: { type: String, default: 'Rwanda' },
});

const Querry = mongoose.model('Querry', QuerryModel);
export default Querry;
