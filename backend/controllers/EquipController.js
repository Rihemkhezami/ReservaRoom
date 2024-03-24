import EquipementModel from '../models/Equipement.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



//create equipment
export async function create(req, res) {
    try {
        const {nom,description,image,stock}=req.body;
        const equipement = new EquipementModel({nom,description,image,stock});
        await equipement.save();
        res.status(201).send('Equipment added successfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
};



//Show equipment
export async function showEquipment(req,res) {
    const {id} = req.params;
    const equipement = await EquipementModel.findById(id);
        if(equipement){
            res.json(equipement);
        }else{
            res.status(404).json({message:"Equipment not found"});
        }
    
}

//Edit equipment
export async function editEquipment (req, res)  {
    const {nom,description,image,stock} = req.body;
    const {id}=req.params;
    try {
        await EquipementModel.findByIdAndUpdate(id, {nom,description,image,stock});
        res.json({ message: "Equipment updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete equipment
export async function deleteEquipment(req,res) {
    try {
       const {id} = req.params;
       await EquipementModel.findByIdAndDelete(id)
       res.send('Equipment deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
};
