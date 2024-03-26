import UserModel from "../models/User.js";
//Show users
export async function showUsers(req,res) {
    
    const users = await UserModel.find();
        if(users){
            res.json(users);
        }else{
            res.status(404).json({message:"Users not found"});
        }
    
}