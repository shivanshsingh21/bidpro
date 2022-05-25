const { bidService } = require("../service/bid.service");
const BaseController = require("./base.controller");

class BidController extends BaseController {

      bid = async (req, res, next) => {
        try {
            let { item_id,category_id,users_id,bid_finish_time,bid_finish_prize } = req.body;
            let data = {
                item_id,
                category_id,
                users_id,
                bid_finish_prize,
                bid_finish_time,
            }
            let bidData = await bidService.addBid(data);
            this.renderJSON(req,res,bidData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }
    
};


    module.exports = {
        bidController: new BidController()
    }