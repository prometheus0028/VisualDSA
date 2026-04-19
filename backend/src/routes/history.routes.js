import express from 'express';
import {
  saveTestResult,
  getTestHistory,
} from '../controllers/history.controller.js';

const router = express.Router();

// 🔥 SAVE TEST RESULT
router.post('/save', saveTestResult);

// 🔥 GET TEST HISTORY
router.get('/', getTestHistory);

export default router;
