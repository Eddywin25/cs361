import express from 'express';
import { getGame } from '../controllers/getGame';

const router = express.Router();

router.get('/', getGame);

export default router;
