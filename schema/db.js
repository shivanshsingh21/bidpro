const mongoose = require('mongoose');
dbfunction = () => {

    try {
        (async () => {
            await mongoose.connect('mongodb://localhost:27017/bid_project', { useNewUrlParser: true, useUnifiedTopology: true });

        })();
    } catch (err) {
        console.log(err);
    }
}

module.exports = { dbfunction };