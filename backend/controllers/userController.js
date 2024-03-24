import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



//Signup
export async function signup(req, res) {
    const { firstname, lastname,email, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Create new user
        const newUser = new UserModel({ firstname, lastname,email, password });
        await newUser.save();
        res.json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Signin
export async function signin (req, res) {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email " });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        // Create and send JWT token
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Show user
export async function profile(req,res) {
    const {id} = req.params;
    const user = await UserModel.findById(id);
        if(user){
            res.json(user);
        }else{
            res.status(404).json({message:"User not found"});
        }
    
}

//Edit profile
export async function editProfile (req, res)  {
    const {firstname, lastname, email} = req.body;
    const {id}=req.params;
    try {
        await UserModel.findByIdAndUpdate(id, {email, firstname, lastname  , email});
        res.json({ message: "Profile updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete profile
export async function deleteProfile (req,res) {
    try {
       const {id} = req.params;
       await UserModel.findByIdAndDelete(id)
       res.send('User deleted successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
};

//Change password
export async function editPassword(req,res) {
    const{email,currentPaswword,newPassword} = req.body;
    UserModel.findOne({email})
    .then(user => {
        if(!user){
            return res.status(404).json({message:"user not found"});   
        }

        const isPasswordValid =  bcrypt.compare(currentPaswword, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"incorrect current password"});
        }
        user.password=newPassword;
        return user.save();
     })
     .then(updatedUser => {
        res.json({message: "Password updated successfully"});
     })
     .catch(err => res.status(500).json({message:err.message}));
}