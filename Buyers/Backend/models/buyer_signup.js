var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var Buyer = mongoose.model('buyer_signup',{
    fname :{
        type : String
    },
    lname : {
        type : String
    },
    email : {
        type : String
    },
    phone :{
        type : String
    },
    password : {
        type : String 
    }
});

module.exports = {Buyer};