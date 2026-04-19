import express from 'express';
import {
  createChat,
  getChats,
  getChatById,
  sendMessage,
  deleteChat,
} from '../controllers/tutor.controller.js';

const router = express.Router();

// 🔥 CREATE NEW CHAT
router.post('/create', createChat);

// 🔥 GET ALL CHATS
router.get('/', getChats);

// 🔥 GET SINGLE CHAT
router.get('/:chat_id', getChatById);

// 🔥 SEND MESSAGE
router.post('/message', sendMessage);

// 🔥 DELETE CHAT
router.delete('/chat/:id', deleteChat);

export default router;
