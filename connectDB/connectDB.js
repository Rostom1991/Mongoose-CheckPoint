const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = () => {
    mongoose.connect(process.env.secure, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Succeeded"))
    .catch((err)=>console.log("failed to connect"))
}
module.exports=connectDB
