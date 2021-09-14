const Mongoose = require ("mongoose");

const cartSchema = Mongoose.Schema({
    userID : { type: Schema.Types.ObjectId, ref: 'User' },
    products : [{ type: Schema.Types.ObjectId, ref: 'Ecart' }]
})

module.exports  = Mongoose.model("Cart",cartSchema);