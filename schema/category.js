const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: string, unique: true, lowercase: true },
    is_active: { type: Boolean, default: true, required: true},
},{ timestamps: true });

let Categories = mongoose.model('categories', categorySchema);

module.exports = Categories;