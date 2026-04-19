import express from 'express';
import { ensureProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/ensure', ensureProfile);

export default router;
