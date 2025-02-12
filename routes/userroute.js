import {createUser,getAll,findUserById,Updateuser,DeleteUser,register,login,logout} from "../controllers/usercontroller.js";
import express from "express";
//import auth from "../middleware/auth.js";


const route= express.Router();
 route.post('/create',createUser)
 route.get('/getall',getAll)
 route.get("/finduser/:id",findUserById)
 route.put("/update/:id",Updateuser)
 route.delete('/delete/:id',DeleteUser)

 route.post("/register",register)
 route.post("/login",login)
 route.post("/logout",logout)
export default route;