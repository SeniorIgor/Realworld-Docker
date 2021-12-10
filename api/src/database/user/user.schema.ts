import { Schema } from 'mongoose';

import { sameLastName, setLastUpdated } from './user.methods';
import { findByAge, findOneOrCreate } from './user.statics';

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findByAge = findByAge;

UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameLastName = sameLastName;

export default UserSchema;
