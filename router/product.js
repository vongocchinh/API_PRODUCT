"use strict";

const ProductModel =require('./../model/Product');
const express=require('express');

const router=express.Router();
const multer = require('multer');

// // const upload=multer({dest:'uploads/'});
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/');
//     },
//     filename: function(req, file, cb) {
//       cb(null, new Date.now() + file.originalname);
//     }
//   });
  
//   const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
  
//   const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
//   });
  


router.get('/',async(req,res)=>{
    try {
        const product=await ProductModel.find();
        res.json(product);
    } catch (error) {
        res.json({message:error});
    }
})


router.get('/:idProduct',async(req,res)=>{

    try{
        const productId=await ProductModel.findById(req.params.idProduct);
        res.json(productId)
    }catch(er){
        res.json({message:er})
    }
})

router.post('/',async(req,res)=>{
  const product =new ProductModel({
      name:req.body.name,
      price:Number(req.body.price),
      description:req.body.description,
      brand:req.body.brand,
      sale:Number(req.body.sale),
      images:req.body.images
  })
  try {
      const saveProduct=await product.save();
      res.json(saveProduct);
  } catch (error) {
    res.json({message:error})
  }
})

router.put('/:id',async(req,res)=>{
    try {
        const UpdateProduct=await ProductModel.updateOne({_id:req.params.id},{$set:{
            // _id:req.body._id,
            name:req.body.name,
            price:Number(req.body.price),
            description:req.body.description,
            brand:req.body.brand,
            sale:Number(req.body.sale),
            images:req.body.images
        }});
        res.json(UpdateProduct)
    } catch (error) {
        res.json({message:error})
    }
})


router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const ProductRemove=await ProductModel.deleteOne({_id:id});
        res.json(ProductRemove);
    }catch(er){
        res.json({
            message:er
        })
    }
})

module.exports=router;