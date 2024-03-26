import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:Number,
    password:String
   // role: { type: String, enum: ['admin','user'] }, // Champ pour spécifier le rôle de l'utilisateur
})

UserSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10)
    }
    next();
})

const UserModel= mongoose.model("users",UserSchema);


export default UserModel;