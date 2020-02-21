var express = require("express");
var mongo = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

const User = require("./models/User.js")
var {url} = 'mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false/testdb'

mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongo.connection //Mongo Connection Instance
db.on('open', () => console.log('database connected'))  


var app = express();

app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.post('/api/addUser',(req,res)=>{
    if(req.body.email){
        let data = req.body
        User.create(data,(err,doc)=>{
            if(err)return res.json({err,message:"Error"})
            else{
                return res.json({doc})
            }
        })
    }
})

app.listen(5000,()=>{console.log("App is running on port 5000")});