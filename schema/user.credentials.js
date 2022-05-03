const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCredSchema = new Schema({
    password:
    {
        type: String,
        unique: true,
        require: true,
        min: 8,
        max: 50,
        trim: true
    },
    reset_link:
    {
        type: String,
        unique: true,
        require: true,
        min: 8,
        max: 50,
        trim: true
    },
    activation_link:
    {
        type: String,
        unique: true,
        require: true,
        min: 8,
        max: 50,
        trim: true
    }
})

    let User = mongoose.model('UsersCred', UserCredSchema);

module.exports = User;