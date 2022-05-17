const { userRepo } = require("../repo/user.repo");
const bcrypt = require("bcrypt");
const {generateAccesstoken} = require('../middleware/auth');

class UserService {
  login = async (data) => {
    let userCond = { email: data.email, is_active: true };
    let user = await userRepo.findUser(userCond);
    let passcond={
      user_id:user._id
    }
    let pswrd = await userRepo.findUserCred(passcond);
    if (user == null) {
      return res.status(400).send("Cannot find user email");
    } else {
     console.log(user);
      if (await bcrypt.compare(data.password, pswrd.password)) {
        console.log(user)
        const accessToken = await generateAccesstoken({
          _id:user._id,
          role_id:user.role_id
        })
        return Promise.resolve({ 
          data: accessToken,
          success: true
        });
      } else {
        return Promise.reject({
          success: false,
          messageKey: "Not Allowed",
        });
      }
    }
  }


addUser = async (data) => {
  let resData = await userRepo.addUser(data);
  console.log(resData);
  let hashPassword = bcrypt.hashSync(data.password, 10);
  let usersCred = {
    user_id: resData._id,
    password: hashPassword,
  };
  let saveCred = await this.addUserCred(usersCred);
  if (saveCred)
    return Promise.resolve({
      success: true,
      messageKey: "register",
    });
  else
    return Promise.reject({
      success: false,
      messageKey: "error",
    });
};

addUserCred = async (data) => {
  let resData = await userRepo.addUserCred(data);
  if (resData)
    return Promise.resolve({
      success: true,
      messageKey: "register",
    });
  else
    return Promise.reject({
      success: false,
      messageKey: "error",
    });
}
};

module.exports = {
  userService: new UserService(),
};
