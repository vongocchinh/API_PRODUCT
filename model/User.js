const mongoose =require('mongoose');

const User=mongoose.Schema({
    username:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:false
    },
})


module.exports=mongoose.model('User',User);