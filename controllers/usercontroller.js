import User from "../models/usermodel.js";

export const createUser = async (req,res)=>{
    try{
        const userData = new User(req.body);
        if(!userData)
        {
            res.status(404).json({msg:"user not found"});
        }

        await userData.save();
        res.status(200).json({msg:"user got created successfully"})
    }
    catch(error)
    {
        res.status(500).json({err:error})
    }

}


export const getAll = async(req,res)=>{
try{const userData= await User.find();
    if(!userData){
     res.status(404).json({message:"User not found."});
    }
    res.status(200).json(userData);
 }
 catch(error){
    res.status(500).json({err:error});
 }
   
}

export const findUserById = async(req,res)=>{
   try{
        const userid= req.params.id;

     const  userData= await User.findById(userid);
     
     if(!userData){
        res.status(404).json({message:"User not found."});
       }
       res.status(200).json(userData);
    }
     catch(error){
       res.status(500).json({err:error});
    }
      
}

export const Updateuser = async(req,res)=>{
    try{
         const userid= req.params.id;
 
      const  userData= await User.findById(userid);
      
      if(!userData){
         res.status(404).json({message:"User not found."});
        }
        const updatedata= await User.findByIdAndUpdate(userid,req.body,{new:true});
        res.status(200).json({msg:"User Updated successfully"});
     }
      catch(error){
        res.status(500).json({err:error});
     }
       
 }


 export const DeleteUser = async(req,res)=>{
   try{
        const userid= req.params.id;

     const  userData= await User.findById(userid);
     
     if(!userData){
        res.status(404).json({message:"User not found."});
       }
       const deleteData = await User.findByIdAndDelete(userid);
       res.status(200).json({msg:"User Deleted Successfully"});
    }
     catch(error){
       res.status(500).json({err:error});
    }
}