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
app.use('/uploads', express.static('uploads'));

app.use(express.json());


app.get('/',(req,res)=>{
  res.send("<h1>Api Product</h1> <br/> <a>.../product :Truy cập product </a> <br/><a> .../user : Truy cập user </a>")
})

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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});



//connect mongoose

mongoose.connect(process.env.dataBase, {useNewUrlParser: true ,useUnifiedTopology: true},async err=>{
  // {useNewUrlParser: true, useUnifiedTopology: true}
  if(!err){
    console.log("connect mongoose success")
  }else{
    console.log("connect mongoose failed");
  }
});


app.listen(process.env.port,()=>{console.log(`App start with localhost: ${process.env.port}`);});