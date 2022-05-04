const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, unique: true, lowercase: true, required: true, trim: true },
    is_active: { type: Boolean, default: true, required: true },
}, { timestamps: true });

let Categories = mongoose.model('categories', categorySchema);

module.exports = Categories;