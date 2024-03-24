import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
  
import userRoutes from './routes/userRoute.js'
import equipRoutes from './routes/equipRoute.js'


const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json());
app.use(cors());



app.use('/user',userRoutes);
app.use('/equipement',equipRoutes);







//connect to the database
mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('connected to the database')
    app.listen(PORT,()=>{
        console.log("server is running")
    })
}).catch(err=>{
    console.log('Error connecting to database:',err.message)
})

