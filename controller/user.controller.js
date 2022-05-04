const { userService } = require("../service/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController {

     register = async (req, res, next) => {
        try {
            let { f_name,l_name,email,mobile,category_id,roles_id,address } = req.body;
            let serData = await userService.addUser(f_name,l_name,email,mobile,category_id,roles_id,address);
            this.renderJSON(req,res,serData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }




}
module.exports = {
    userController: new UserController()
}