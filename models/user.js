import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import dotenv from 'dotenv';

dotenv.config();
const Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name required']
    },
    lastName: {
      type: String,
      required: [true, 'Last name required']
    },
    email: {
      type: String,
      required: [true, 'Email required'],
      validate: {
        validator: isEmail
      }
    },
    password_digest: {
      type: String,
      required: true,
      select: false
    }
  },
  { timestamps: true }
);

const User = mongoose.model('users', Schema);

export default User;
