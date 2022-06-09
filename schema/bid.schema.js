const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema({
  users_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  item_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "items",
      require: true,
    },
  ],
  category_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
      require: true,
    },
  ],
 
  bid_finish_prize: {
    type: Number,
    require: true,
  },
  bid_finish_time: {
    type: Date,
    required: false,
  },
});

let bids = mongoose.model("bid", bidSchema);

module.exports = bids;
