"use strict";
const ProductRouter=require('./router/product');
const UserRouter =require('./router/user');
module.exports =  (app)=> {
    //connect router product
    app.use('/product',ProductRouter);
    //connect router user
    app.use('/user',UserRouter)
}