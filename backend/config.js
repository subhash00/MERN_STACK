import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'your mongodb secret key',
  JWT_SECRET: process.env.JWT_SECRET || 'yoursecret',
};

