import User from "./user.model";

//(async function) ---> database query
const createUserToDB = async () => {
    //   instance
    const user = new User({
      id: "778",
      role: "student",
      password: "jhakanaka",
      name: {
        firstName: "Mr.mezbaul",
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
  };