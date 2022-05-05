const { userRepo } = require("../repo/user.repo");
var nodemailer=require('nodemailer');
class UserService {
    addUser= async (data) => {
        let resData = await userRepo.addUser(data);
        if (resData) return Promise.resolve({
            success: true,
            messageKey: "register"
            
        })
        else return Promise.reject({
            success: false,
            messageKey: "error"
        })


    }
}
module.exports = {
    userService: new UserService()
}