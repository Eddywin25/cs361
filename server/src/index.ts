const express = require('express');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import playerRouter from './routes/playerRoutes';
const cors = require('cors');

dotenv.config();
console.log('MongoDB URI:', process.env.MONGODB_URI);

const port = 3000;
const app = express();

mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Database connection error', err));

const db = mongoose.connection;

app.use(cors());
app.use(express.json());

// Use routers
app.use('/player', playerRouter);

app.listen(port, () => {
    console.log('Server listening on port ${port}')
    }
)