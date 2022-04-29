const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    lname: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        email: true,
        trim: true
    },
    phone:
    {
        type: String,
        required: true,
        unique: true,
        Number: true,
        max: 10,
        trim: true

    },
    address:
        [
            {
                house_no: { type: String, require: true, lowercase: true, trim: true },
                street: { type: String, require: true, lowercase: true, trim: true },
                city: { type: String, require: true, lowercase: true, trim: true },
                pin: { type: String, require: true, trim: true },
            }],

})

let User = mongoose.model('User', userSchema);

module.exports = User;