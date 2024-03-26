import SalleModel from '../models/Salle.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import EquipementModel from '../models/Equipement.js';



//Show salles
export async function showSalles(req,res) {
    
    const salles = await SalleModel.find();
        if(salles){
            res.json(salles);
        }else{
            res.status(404).json({message:"Salles not found"});
        }
    
}



//create salle
export async function create(req, res) {
    try {
        const { nom, capacite, equipements } = req.body;
        const salle = new SalleModel({ nom, capacite, equipements });
        await salle.save();
        res.status(201).send('Salle added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}



//Show salle
export async function showSalle(req, res) {
    const { id } = req.params;
        const salle = await SalleModel.findById(id);
    try {
        
        if (!salle) {
            return res.status(404).send("Salle not found");
        }
        res.send(salle);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur : ' + error.message);
    }
}






//Edit salle
export async function editSalle(req, res)  {
    try {
        const {id} = req.params;
        const{nom, capacite, equipements} = req.body;
        const updatedSalle = await SalleModel.findByIdAndUpdate(id,{nom, capacite, equipements})
        res.send(updatedSalle)
     } catch (error) {
         res.status(400).send(error.message)
     }
};

//delete salle
export async function deleteSalle(req,res) {
    try {
       const {id} = req.params;
       await SalleModel.findByIdAndDelete(id)
       res.send('Salle deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
};
