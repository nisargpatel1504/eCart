const Mongoose = require ("mongoose");


const ecartSchema = new Mongoose.Schema({
    title : String,
    price: Number,
    image : String,
    rating : Number
});


module.exports =  Mongoose.model("Ecart",ecartSchema);
