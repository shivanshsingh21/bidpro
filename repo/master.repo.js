const CategorySchema = require("../schema/category.schema")
const RolesSchema = require("../schema/master/roles.schema")

class MasterRepo {
    addCategory = async(data)=>{
        return CategorySchema.create(data)
        
    }

    addRoles = async(data)=>{
        return RolesSchema.create(data)
        
    }

    getRoles = async(cond)=>{
        return RolesSchema.find(cond)
        
    }

    getCategory = async(cond)=>{
        return RolesSchema.find(cond)
        
    }
}

module.exports={
    masterRepo : new MasterRepo()
}