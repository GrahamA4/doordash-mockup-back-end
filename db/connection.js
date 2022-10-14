import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let PROD_MONGODB = process.env.PROD_MONGODB;

mongoose.set('returnOriginal', false);

mongoose
  .connect(PROD_MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
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
