const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const mongoose=require('mongoose')

// config dotenv
dotenv.config({path:'./.env'})


// config app
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json());




//connect router
let Router =require('./Router');
Router(app);



//config header
// app.use(function (req, res, next) {
//     res.status(404).send({ url: req.originalUrl + " not found" });
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

//connect mongoose
mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true ,seUnifiedTopology: true},err=>{
  if(!err){
    console.log("success")
  }else{
    console.log("error");
  }
});

// app listing
app.listen(3001,()=>{console.log("app dang chay voi port localhost:3000");});