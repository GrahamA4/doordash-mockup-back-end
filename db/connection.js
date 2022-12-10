import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();
// let MONGODB_URI = process.env.PROD_MONGODB;
// console.log(process.env.PROD_MONGODB);
mongoose
  .connect('mongodb+srv://agraham4:agraham4@cluster0.uadq7nq.mongodb.net/test')
  .catch((error) =>
    console.error('Error connecting to MongoDB', error.message)
  );

mongoose.connection.on('disconnected', () =>
  console.log('Disconnected from MongoDB')
);

mongoose.connection.on('error', (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

export default mongoose.connection;
