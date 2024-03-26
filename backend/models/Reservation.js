import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const ReservationSchema = new mongoose.Schema({
    title:String,
    datedebut:Date,
    datefin:Date,
    salleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SalleModel'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }

})



const ReservationModel= mongoose.model("reservations",ReservationSchema);


export default ReservationModel;