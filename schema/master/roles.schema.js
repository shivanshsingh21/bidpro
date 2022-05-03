const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roleSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
}, { timestamps: true, });
module.exports = mongoose.model('role', roleSchema);