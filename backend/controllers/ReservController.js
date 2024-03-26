import ReservationModel from '../models/Reservation.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import EquipementModel from '../models/Equipement.js';



//Show Reservations
export async function showReservations(req,res) {
    
    const reservations = await ReservationModel.find();
        if(reservations){
            res.json(reservations);
        }else{
            res.status(404).json({message:"Reservations not found"});
        }
    
}


//create Reservation
export async function create(req, res) {
    try {
        const {title, datedebut, datefin, salleId,userId } = req.body;
       // const userId = req.userId; // Récupérer l'ID de l'utilisateur à partir du jeton
        const reservation = new ReservationModel({ title,datedebut, datefin, salleId,userId });
        await reservation.save();
        res.status(201).send('Reservation added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}




//Show reservation
export async function showReservation(req, res) {
    const { id } = req.params;
        const reservation = await ReservationModel.findById(id);
    try {
        
        if (!reservation) {
            return res.status(404).send("reservation not found");
        }
        res.send(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur : ' + error.message);
    }
}






//Edit reservation
export async function editReservation(req, res)  {
    try {
        const {id} = req.params;
        const{title,datedebut,datefin,salleId,userId } = req.body;
        const updatedReserv = await ReservationModel.findByIdAndUpdate(id,{title,datedebut,datefin,salleId,userId })
        res.send(updatedReserv)
     } catch (error) {
         res.status(400).send(error.message)
     }
};

//delete reservation
export async function deleteReservation(req,res) {
    try {
       const {id} = req.params;
       await ReservationModel.findByIdAndDelete(id)
       res.send('Reservation deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
};
