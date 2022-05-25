const { bidRepo } = require("../repo/bid.repo")

class BidService {
    addBid= async (data) => {
        
        let resData = await bidRepo.addBid(data);
        if (resData) return Promise.resolve({
            success: true,
            messageKey: "Bid Final Details Added"
        })
        else return Promise.reject({
            success: false,
            messageKey: "error"
        })


    }
};
module.exports = {
    bidService: new BidService(),
  };
  
