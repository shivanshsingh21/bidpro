const CategorySchema = require("../schema/category.schema")

class MasterRepo {
    addCategory = async(data)=>{
        return CategorySchema.create(data)
        
    }
}

module.exports={
    masterRepo : new MasterRepo()
}