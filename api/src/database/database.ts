import mongoose from 'mongoose';

import { MONGO_URI } from '../configuration';

export const connect = () => {
  mongoose.connect(MONGO_URI);

  return mongoose.connection;
};

export const disconnect = () => mongoose.disconnect();
