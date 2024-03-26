import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const SalleSchema = new mongoose.Schema({
    nom:String,
    capacite:Number,
    equipements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EquipementModel'
    }]
})



const SalleModel= mongoose.model("salles",SalleSchema);


export default SalleModel;