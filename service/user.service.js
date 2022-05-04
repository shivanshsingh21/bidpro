const { userRepo } = require("../repo/user.repo");
class UserService {
    addUser= async (f_name,l_name,email,mobile,category,role,address) => {
        let data = {
            f_name: f_name,
            l_name:l_name,
            email:email,
            mobile:mobile,
            category:category,
            role:role,
            address:address,
        }
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