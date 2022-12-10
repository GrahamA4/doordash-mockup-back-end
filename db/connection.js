import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();
let MONGODB_URI = process.env.PROD_MONGODB;
console.log(MONGODB_URI);
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('connected successfully'))
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
