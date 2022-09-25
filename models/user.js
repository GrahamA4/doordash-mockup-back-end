import { Mongoose } from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const UserSchema = new Mongoose.Schema({
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
  }
});
