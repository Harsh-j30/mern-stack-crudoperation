import {createUser,getAll,findUserById,Updateuser,DeleteUser} from "../controllers/usercontroller.js";
import express from "express";

const route= express.Router();
 route.post('/create',createUser)
 route.get('/getall',getAll)
 route.get("/finduser/:id",findUserById)
 route.put("/update/:id",Updateuser)
 route.delete('/delete/:id',DeleteUser)
export default route;


