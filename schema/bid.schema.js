const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema({

    users_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        require: true,
      },
      item_id:[ {
        type: Schema.Types.ObjectId,
        ref: "items",
        require: true,
      }],
      category_id: [
        {
          type: Schema.Types.ObjectId,
          ref: "categories",
          require: true,
        },
      ],

      bid_finish_date:
      {
        type: Date, 
        default: (new Date()).getTime(),
      },


});

let items = mongoose.model("bid", bidSchema);

module.exports = bids;
