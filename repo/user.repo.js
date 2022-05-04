const UserSchema = require("../schema/user.schema")
class UserRepo {
    addUser = async(data)=>{
        return UserSchema.create(data)
        
    }
}

module.exports={
    userRepo : new UserRepo()
}