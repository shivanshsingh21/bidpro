const BidSchema = require("../schema/bid.schema")


class BidRepo {
    addBid= async(data)=>{
        let bidData = new BidSchema(Object.assign({},data))
        return bidData.save(data)
        
    }
}


module.exports={
    bidRepo : new BidRepo()
}