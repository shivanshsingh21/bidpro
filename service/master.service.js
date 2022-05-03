const { masterRepo } = require("../repo/master.repo")

class MasterService {
    addCategory = async (name) => {
        let data = {
            name: name
        }
        let resData = await masterRepo.addCategory(data);
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
    masterService: new MasterService()
}