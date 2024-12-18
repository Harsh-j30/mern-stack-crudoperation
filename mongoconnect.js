//  ************************* mongodb connection code *********************************

// import dotenv from "dotenv";
// import express from 'express';
// import bodyparser from 'body-parser' ;             
// import mongoose from "mongoose";
// dotenv.config();
// import User from './models/usermodel.js';

// const app=express();
// const port=process.env.PORT;
// const url=process.env.MONGOOSE_URL;

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));

// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
//     .then(()=>{
        
//         app.listen(port,()=>{
//         console.log(`Server is running on http://localhost:${port}`);
//     })}
        
//     )
//     .catch((err)=>console.error("Connection Failed",err))

//     async function create_User()
//     {
//         const user = new User({   
//             name:"Harsh",
//             email:"harsh@gmail.com",
//             password:"12334",
//             age:20
//              });
//              const result = await user.save();
//              console.log("User Created :",result);
//     }
//     create_User();




import dotenv from "dotenv";
import express from 'express';
import bodyparser from 'body-parser' ;             
import mongoose from "mongoose";
dotenv.config();

import route  from "./routes/userroute.js";

const app=express();
const port=process.env.PORT;
const url=process.env.MONGOOSE_URL;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        
        app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })}
        
    )
    .catch((err)=>console.error("Connection Failed",err))

  
    app.use('/api', route);