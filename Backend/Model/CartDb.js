const Mongoose = require ("mongoose");




const cartSchema = Mongoose.Schema({
    userId : Number,
    productId : String
})

module.exports  = Mongoose.model("Cart",cartSchema);