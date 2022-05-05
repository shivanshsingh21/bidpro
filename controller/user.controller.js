const { userService } = require("../service/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController {

     register = async (req, res, next) => {
        try {
            let { f_name,l_name,email,mobile,category_id,roles_id,address } = req.body;
            let data = {
                f_name: f_name,
                l_name:l_name,
                email:email,
                mobile:mobile,
                category_id:category_id,
                roles_id:roles_id,
                address:address,
            }
            let userData = await userService.addUser(data);
            this.renderJSON(req,res,userData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }
};


module.exports = {
    userController: new UserController()
}