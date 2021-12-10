import { IUserDocument } from './user.types';

import { UserModel } from './user.model';

export async function findOneOrCreate(userId: string): Promise<IUserDocument> {
  const record = await UserModel.findOne({ userId });
  if (record) {
    return record;
  } else {
    return UserModel.create({ userId });
  }
}

export async function findByAge(
  min?: number,
  max?: number
): Promise<IUserDocument[]> {
  return UserModel.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
