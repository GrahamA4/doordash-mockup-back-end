import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.PROD_MONGODB)
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
