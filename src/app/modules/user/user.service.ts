import User from "./user.model";

//(async function) ---> database query
export const createUserToDB = async () => {
  //   instance
  const user = await new User({
    id: "811",
    role: "student",
    password: "jhak5",
    name: {
      firstName: "Mr.mezbaul test",
      middleName: "abedin",
      lastName: "persian",
    },
    
    gender: "male",
    email: "abc@gmail.com",
    contactNo: "0177777777",
    emergencyContactNo: "01888888888",
    presentAddress: "Uganda",
    permanentAddress: "USA",
  });
  await user.save();
  return user;
};
