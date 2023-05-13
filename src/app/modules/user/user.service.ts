import { IUser } from "./user.interface";
import User from "./user.model";

//(async function) ---> database query
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //   instance
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 }); //field filtering
  return user;
};
