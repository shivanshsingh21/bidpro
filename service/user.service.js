const { userRepo } = require("../repo/user.repo");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const { promise } = require("bcrypt/promises");

class UserService {
  login = async (data) => {
    let userCond = { email: data.email, is_active: true };
    let user = await userRepo.findUser(userCond);
    console.log(user);
    if (user == null) {
      return res.status(400).send("Cannot find user email");
    } else {
      if (await bcrypt.compare(data.password, user.password)) {
        const accessToken = auth.generateAccesstoken({
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
}
module.exports = {
  userService: new UserService(),
};
