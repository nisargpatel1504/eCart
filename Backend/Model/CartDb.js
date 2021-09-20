const Mongoose = require ("mongoose");

const cartSchema = Mongoose.Schema({
  product: String
})

module.exports  = Mongoose.model("Cart",cartSchema);