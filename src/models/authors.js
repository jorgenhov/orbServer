import mongoose from 'mongoose';

const authorsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
})

const Authors = mongoose.model('Authors', authorsSchema);

export default Authors;
