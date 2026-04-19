# VisualDSA — Interactive Data Structures & Algorithms Platform

[![Frontend](https://img.shields.io/badge/frontend-react_vite-blue)](https://react.dev/)
[![Backend](https://img.shields.io/badge/backend-node_express-green)](https://expressjs.com/)
[![Database](https://img.shields.io/badge/database-supabase-orange)](https://supabase.com/)
[![AI](https://img.shields.io/badge/ai-openai-black)](https://openai.com/)
VisualDSA is a full-stack platform designed to help users master Data Structures and Algorithms through visualization, adaptive testing, and AI-driven feedback.

---

## Overview

VisualDSA combines structured learning, real-time algorithm visualization, and intelligent analysis to create a complete DSA preparation ecosystem.
The system is built around three pillars:

- Concept-first learning via structured curriculum
- Practice through adaptive testing
- Improvement through AI-driven insights

---

## Features

### Curriculum

- Structured roadmap for DSA topics
- Covers arrays, strings, trees, graphs, and dynamic programming
- Category-based navigation

### Algorithm Visualization

- Step-by-step execution
- State-based rendering
- Concept-first explanations

### AI Tutor

- Chat-based assistant
- Context-aware responses using user performance
- Helps with debugging and conceptual clarity

### Practice Engine

- Mixed question types (MCQ + debugging)
- Real-time evaluation
- Score and accuracy tracking

### AI Test Feedback

- Concept-level weakness detection
- Mistake pattern analysis
- Actionable roadmap generation

### SWOT Analysis

- Strengths, weaknesses, opportunities, threats
- Generated from user activity and performance
- Personalized learning roadmap

### Dashboard

- Activity tracking
- Performance analytics
- Progress history

---

## Architecture

```bash
visualdsa/
├── backend/
│   ├── src/
│   │   ├── config/         # Supabase and OpenAI configuration
│   │   ├── controllers/    # API controllers (AI, SWOT, Tutor, Tests)
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Data models (if applicable)
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic (AI, test processing, SWOT)
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   └── logo.svg
│   ├── src/
│   │   ├── app/            # App entry and routing
│   │   ├── assets/         # Images, animations
│   │   ├── components/     # Reusable UI components
│   │   ├── data/           # Curriculum and algorithm data
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Feature pages (Dashboard, Practice, AI Tutor)
│   │   ├── services/       # API calls
│   │   ├── store/          # Zustand state management
│   │   ├── styles/         # CSS and Tailwind styles
│   │   ├── main.jsx
│   │   └── App.css
│   ├── .env.example
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Zustand
- Framer Motion

### Backend

- Node.js
- Express.js
- Supabase

### AI

- OpenAI API

---

## Setup

### Clone Repository

```bash
git clone https://github.com/your-username/visualdsa.git
cd visualdsa
```

## Backend Setup

```bash
cd backend
npm install
```

## Create .env file:

```bash
PORT=5000
JWT_SECRET=your_secret
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
OPENAI_API_KEY=your_openai_key
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

## Run backend:

```bash
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
```

## Create .env file:

```bash
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_API_URL=your_backend_url_here
```

## Run frontend:

```bash
npm run dev
```

## Running the Application

```bash
# Terminal 1
cd backend
npm run dev
# Terminal 2
cd frontend
npm run dev
```

Open:

http://localhost:5173

## Environment Variables

### Backend (.env)

- OPENAI_API_KEY
- SUPABASE_SERVICE_ROLE_KEY
- JWT_SECRET
- GOOGLE_CLIENT_SECRET

### Frontend (.env)

- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

## Security

- Sensitive keys are stored only in backend
- Service role key is never exposed to frontend
- .env files are ignored via .gitignore
- .env.example is provided for setup reference

## Development Highlights

- AI outputs are validated before rendering
- Fallback logic prevents UI crashes
- Dashboard auto-refreshes after test submission
- Chat system is user-isolated and session-safe

## Future Enhancements

- Code execution engine
- Advanced recommendation system
- Real-time collaboration
- Mobile optimization

## License

This project is intended for educational and development purposes.
