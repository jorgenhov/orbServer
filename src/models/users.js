import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

const User = mongoose.model('User', userSchema);

export default User;
