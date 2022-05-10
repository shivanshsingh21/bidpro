const UserSchema = require("../schema/user.schema");
const UserCredSchema = require("../schema/user.credentials");
class UserRepo {

    findUser = async(query)=>{
        return UserSchema.findOne(query)
        
    }

    addUser = async(data)=>{
        return UserSchema.create(data)
        
    }

    addUserCred = async(data)=>{
        return UserCredSchema.create(data)
        
    }
}

module.exports={
    userRepo : new UserRepo()
}