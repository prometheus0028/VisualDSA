import express from 'express';
import cors from 'cors';

// 🔐 AUTH + USER (existing)
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

// 🔥 NEW MODULAR ROUTES
import activityRoutes from './routes/activity.routes.js';
import swotRoutes from './routes/swot.routes.js';
import historyRoutes from './routes/history.routes.js';
import analysisRoutes from './routes/analysis.routes.js';

// AI TUTOR
import aiRoutes from './routes/ai.routes.js';
import tutorRoutes from './routes/tutor.routes.js';

// TEST
import testRoutes from './routes/test.routes.js';

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= ROUTES =================

// 🔐 AUTH
app.use('/api/auth', authRoutes);

// 👤 USER
app.use('/api/user', userRoutes);

// 📊 CONSISTENCY TRACKER
app.use('/api/activity', activityRoutes);

// 🤖 AI SWOT
app.use('/api/swot', swotRoutes);

// 📝 TEST HISTORY
app.use('/api/history', historyRoutes);

// 📈 TOPIC ANALYSIS
app.use('/api/analysis', analysisRoutes);

// 💬 AI TUTOR
app.use('/api/ai', aiRoutes);
app.use('/api/tutor', tutorRoutes);

// 📝 TEST
app.use('/api/test', testRoutes);

// ================= ROOT =================
app.get('/', (req, res) => {
  res.send('🚀 VisualDSA API Running');
});

export default app;
