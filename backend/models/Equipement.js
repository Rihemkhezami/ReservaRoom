import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const EquipementSchema = new mongoose.Schema({
    nom:String,
    description:String,
    image:String,
    stock:Number
})



const EquipementModel= mongoose.model("equipements",EquipementSchema);


export default EquipementModel;