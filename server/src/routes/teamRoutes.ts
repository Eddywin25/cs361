import express from 'express';
import { getTeam } from '../controllers/getTeam';

const router = express.Router();

router.get('/team', getTeam);

export default router;
