const Mongoose = require ("mongoose");


const userSchema = new Mongoose.Schema({
    email : {
                type: String ,
                required : true
            },
    password :{
                type : String,
                required : true
            }
})


// const cartSchema = Mongoose.Schema({
//     userId : Number,
//     productId : String
// })


module.exports  = Mongoose.model("User",userSchema);
