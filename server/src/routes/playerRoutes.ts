import express from 'express';
import { getPlayer } from '../controllers/getPlayer';

const router = express.Router();

router.get('/', getPlayer);

export default router;
