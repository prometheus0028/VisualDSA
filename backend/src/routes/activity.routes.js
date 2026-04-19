import express from 'express';
import {
  trackActivity,
  getActivity,
} from '../controllers/activity.controller.js';

const router = express.Router();

// 🔥 TRACK ACTIVITY
router.post('/track', trackActivity);

// 🔥 GET ACTIVITY
router.get('/', getActivity);

export default router;
