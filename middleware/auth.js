require('dotenv').config();
const jwt = require('jsonwebtoken');

 generateAccesstoken=async (user)=> {
     console.log(user)
     let token = jwt.sign(user, process.env.JWTKEY, { expiresIn: '1d'}) 
     return Promise.resolve(token)
}

module.exports = {
    generateAccesstoken
}