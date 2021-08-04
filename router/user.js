"use strict";
const express=require('express');
const router=express.Router();
const UserModel =require('./../model/User');

router.get('/',async(req,res)=>{
    try {
        const userGetAll=await UserModel.find();
        res.json(userGetAll);
    } catch (error) {
        res.json({message:error});
    }
})
router.post('/',async(req,res)=>{
    const userPost =new UserModel({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone
    })
    try {
        const saveUser=await userPost.save();
        res.json(saveUser);
    } catch (error) {
      res.json({message:error})
    }
})

router.get('/:id',async(req,res)=>{
    const id=req.params.id;

    try {
        const userGetId=await UserModel.findById(id);
        res.json(userGetId);
    } catch (error) {
        res.json({message:error})
    }
})


router.put("/:id",async(req,res)=>{
    try{
        const userUpdate=await UserModel.updateOne({_id:req.params.id},{$set:{
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            phone:req.body.phone
        }});
        res.json(userUpdate);
    }catch(er){
        res.json({message:er})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const userDelete=await UserModel.deleteOne({_id:req.params.id});
        res.json(userDelete)
    }catch(er){
        res.json({message:er});
    }
})

module.exports=router;