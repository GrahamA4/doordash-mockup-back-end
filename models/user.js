import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import dotenv from 'dotenv';

dotenv.config();
const Schema = mongoose.Schema();

const User = new Schema(
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

export default mongoose.model('users', User);
