import express from 'express';
import {
  generateSwot,
  getSwotHistory,
} from '../controllers/swot.controller.js';

const router = express.Router();

// 🔥 GENERATE SWOT (AI)
router.post('/', generateSwot);

// 🔥 SWOT HISTORY
router.get('/history', getSwotHistory);

export default router;
