import express from 'express';
import { simpleChat } from '../controllers/ai.controller.js';

const router = express.Router();

// 🔥 BASIC CHAT (optional)
router.post('/chat', simpleChat);

export default router;
