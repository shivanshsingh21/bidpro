const ItemSchema = require("../schema/item.schema")


class ItemRepo {
    addItem = async(data)=>{
        let itemData = new ItemSchema(Object.assign({},data))
        return itemData.save(data)
        
    }
}


module.exports={
    itemRepo : new ItemRepo()
}