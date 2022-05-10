const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCredSchema = new Schema({

    user_id: 
        {
          type: Schema.Types.ObjectId,
          ref: "users",
          require: true,
        },
    password:
    {
        type: String,
        require: true
    },
    reset_link:
    {
        type: String
    
    },
    activation_link:
    {
        type: String,
    }
})

    let User = mongoose.model('UsersCred', UserCredSchema);

module.exports = User;