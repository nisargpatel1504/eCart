const express = require("express");
const app = express();
const cors = require("cors");
const { json, response } = require("express");
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const Ecart  = require('./Model/EcartDb.js');
const User = require('./Model/UserDb.js');
const Cart = require('./Model/CartDb.js');


app.use(cors());
app.use(express.json({extended: false}));

const ConnectionURL= "mongodb+srv://ecartDb:Lumia@535@cluster0.9dlqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(ConnectionURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
})



app.get('/',(req,res)=>{
    Ecart.find((err,data) => {
        if(err){
            res.status(500).send(err)
        } 
        else{
            res.status(201).send(data)
        }
    })
});
 
app.post('/',(req,res) => {
    const dbCard = req.body;

    Ecart.create(dbCard, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.put("/:id", async(req,res)=>{
    
    try{
        const {id} = req.params;
        const updates = req.body;
        const result =await Ecart.findByIdAndUpdate(id,{...updates});
        res.send(result);
     }
    catch(err){
        console.log(err);
    }
});


app.delete("/:id",async(req,res) => {
        try{
                const {id} = req.params;
                await Ecart.findByIdAndDelete(id);
                res.status(200).send("Product deleted");

        }
        catch(err){
            res.status(500).send(err)
        }
});

// Login
app.get('/Login',(req,res)=>{
    User.find((err,data) => {
        if(err){
            res.status(500).send(err)
        } 
        else{
            res.status(201).send(data)
        }
    })
});

app.post('/Login',(req,res) => {
    const {email,password} = req.body;
    User.findOne({email : email}, (err,user) => {
        console.log(user);
        if(user){
           if(password === user.password)
           {
                res.status(200).send({message : "Login Successful",user:user})      
           }
           else{
            res.status(401).send({message : "Password didn't match",user:{}})      
           }    
        }
        else{
            res.status(500).send({message : "User not registered",user:{}})      
        }
    })
});

app.post('/register',(req,res) => {
   
    const {email,password} = req.body;
    User.findOne({email:email},  (err,user)=>{
        if(user){
            res.send({message:"user already registered"})
        }
        else{
            
            const newUser = new User({email,password});
            newUser.save( (err,data) => {
                if(err){
                    res.status(500).send(err)
                }
                else{
                    res.status(201).send(data)
                }
            })
        }
    })
    
});
 
//Checkout Cart
app.get("/Checkout/:id",(req,res) => {

    const {id} = req.params;
    Cart.findById(id,(err,data) => {
        if(err){
            res.status(500).send(err)
        } 
        else{
            res.status(201).send(data)
        }
    })
})

app.post('/Checkout',(req,res) => {
    const cart = req.body;
    Cart.create(cart, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});