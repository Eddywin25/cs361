const express = require('express');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import playerRouter from './routes/playerRoutes';
import teamRouter from './routes/teamRoutes';
import playerStatsRouter from './routes/playerStatsRoutes';
const cors = require('cors');

dotenv.config();
console.log('MongoDB URI:', process.env.MONGODB_URI);

const port = 8000;
const app = express();

// Connect to nba_db
mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Database connection error', err));

const db = mongoose.connection;

app.use(cors());
app.use(express.json());

// Use routers
app.use('/player', playerRouter);
app.use('/team', teamRouter);
app.use('/playerStats', playerStatsRouter);

app.listen(port, () => {
    console.log(`Server listenzing on port ${port}`);
    }
)