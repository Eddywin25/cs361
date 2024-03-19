import express from 'express';
import getAllPlayerStats from '../controllers/getPlayerStats';

const router = express.Router();

router.get('/', getAllPlayerStats);

export default router;
