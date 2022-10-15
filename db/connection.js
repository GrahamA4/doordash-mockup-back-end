import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

let MONGODB_URI = process.env.PROD_MONGODB;

mongoose.set('returnOriginal', false);

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(console.log('connected'))
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
