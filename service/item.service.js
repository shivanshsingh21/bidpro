const { itemRepo } = require("../repo/item.repo")

class ItemService {
    addItem = async (data) => {
        
        let resData = await itemRepo.addItem(data);
        if (resData) return Promise.resolve({
            success: true,
            messageKey: "Item Added"
        })
        else return Promise.reject({
            success: false,
            messageKey: "error"
        })


    }
};
module.exports = {
    itemService: new ItemService(),
  };
  
