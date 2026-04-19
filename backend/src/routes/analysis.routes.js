import express from 'express';
import { getTopicAnalysis } from '../controllers/analysis.controller.js';

const router = express.Router();

// 🔥 TOPIC ANALYSIS
router.get('/', getTopicAnalysis);

export default router;
