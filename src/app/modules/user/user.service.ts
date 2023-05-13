import { IUser } from "./user.interface";
import User from "./user.model";

//(async function) ---> database query
export const createUserToDB = async (payload:IUser) => {
  //   instance
  const user = await new User();
  await user.save();
  return user;
};

export const getUsersFromDB = async () => {
    const users = await User.find();
    return users;
};
