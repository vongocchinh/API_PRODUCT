const mongoose=require('mongoose');

const Product=mongoose.Schema({
    // _id:{
    //     type?:String,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    brand:{
        type:String,
        required:false
    },
    sale:{
        type:Number,
        required:false
    },
    images:{
        type:String,
        required:false
    }
})

module.exports=mongoose.model('Product',Product);