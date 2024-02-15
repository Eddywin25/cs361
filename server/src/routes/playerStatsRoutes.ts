import express from 'express';
import { getPlayerStats } from '../controllers/getPlayerStats';

const router = express.Router();

router.get('/stats', getPlayerStats);

export default router;
