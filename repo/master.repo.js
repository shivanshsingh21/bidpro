const CategorySchema = require("../schema/master/category.schema")
const RolesSchema = require("../schema/master/roles.schema")
class MasterRepo {
    addCategory = async(data)=>{
        return CategorySchema.create(data)
        
    }

    
    addRoles = async(data)=>{
        return RolesSchema.create(data)
        
    }
}

module.exports={
    masterRepo : new MasterRepo()
}