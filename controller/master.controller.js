const { masterService } = require("../service/master.service");
const BaseController = require("./base.controller");

class MasterController extends BaseController {
    addCategory = async (req, res, next) => {
        try {
            let { name } = req.body;
            let serData = await masterService.addCategory(name);
            this.renderJSON(req,res,serData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }

    addRoles = async (req, res, next) => {
        try {
            let { name } = req.body;
            let serData = await masterService.addRoles(name);
            this.renderJSON(req,res,serData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }
}

module.exports = {
    masterController: new MasterController()
}