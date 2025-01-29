import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 4,
  },
  password: {
    type: String,
    required: true,
    min: 4,
  },
});

const UserModel = model('User', userSchema);

export default UserModel;
