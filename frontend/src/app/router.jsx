import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { useEffect } from 'react';

import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import Home from '../pages/home/home';
import GetStarted from '../pages/get-started/get-started';
import Curriculum from '../pages/curriculum/curriculum';
import AlgorithmPage from '../pages/curriculum/algorithm-page';

// DASHBOARD
import Dashboard from '../pages/dashboard/dashboard';

// AI TUTOR
import AITutor from '../pages/ai-tutor/ai-tutor';

// PRACTICE
import PracticeHome from '../pages/practice/practice-home';
import TopicSelection from '../pages/practice/topic-selection';
import Quiz from '../pages/practice/quiz';
import QuizReview from '../pages/practice/quiz-review';

// LOGIN REQUIRED
import LoginRequired from '../pages/auth/login-required';

import { useAuthStore } from '../store/auth.store';

// ================= HASH SCROLL=================
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return null;
}

// ================= AUTH PROTECTION =================
function ProtectedRoute({ children }) {
  const { user, loading } = useAuthStore();
  const location = useLocation();

  if (loading) return null;

  if (!user) {
    return (
      <Navigate
        to="/login-required"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
}

// =================  DEVICE PROTECTION =================
function DeviceProtectedRoute({ children }) {
  const isMobileOrTablet = window.innerWidth < 1024;

  if (isMobileOrTablet) {
    return <Navigate to="/practice" replace />;
  }

  return children;
}

// ================= APP =================
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Navbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/login-required" element={<LoginRequired />} />

        <Route
          path="/curriculum/:categoryId/:algoId"
          element={<AlgorithmPage />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* AI TUTOR */}
        <Route
          path="/ai-tutor"
          element={
            <ProtectedRoute>
              <AITutor />
            </ProtectedRoute>
          }
        />

        {/* PRACTICE */}
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <PracticeHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/select"
          element={
            <ProtectedRoute>
              <TopicSelection />
            </ProtectedRoute>
          }
        />

        {/* QUIZ LOCKED TO LAPTOP */}
        <Route
          path="/practice/quiz"
          element={
            <ProtectedRoute>
              <DeviceProtectedRoute>
                <Quiz />
              </DeviceProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/practice/review"
          element={
            <ProtectedRoute>
              <QuizReview />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
