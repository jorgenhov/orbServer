import mongoose from 'mongoose';

const userListSchema = new mongoose.Schema({
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

const UserList = mongoose.model('UserList', userListSchema);

export default UserList;
