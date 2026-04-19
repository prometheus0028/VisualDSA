/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import QuestionCard from './question-card';
import Navigation from './question-navigation';
import Timer from './timer';
import SubmitModal from './submit-modal';
import SectionTabs from './section-tabs';
import WarningModal from './warning-modal';
import { loadQuestions } from '../../data/practice/question-loader';
import { useNavigate } from 'react-router-dom';

export default function QuizLayout({ topic }) {
  const navigate = useNavigate();
  const quizRef = useRef();

  const savedState = JSON.parse(localStorage.getItem('quiz_state') || '{}');

  // ================= FORCE FULL RESET EVERY TIME =================
  useEffect(() => {
    localStorage.removeItem('quiz_state');
    localStorage.removeItem('quiz_start');
    localStorage.removeItem('quiz_warnings');
    localStorage.removeItem('quiz_ended');
    localStorage.removeItem('quiz_end_reason');
    localStorage.removeItem('quiz_questions');

    setSections({ mcq: [], debug: [] });
    setAnswers({});
    setVisited({});
    setWarnings(0);
    setQuizEnded(false);
    setShowSubmit(false);
  }, [topic]);

  // ================= LOAD QUESTIONS =================
  const [sections, setSections] = useState({ mcq: [], debug: [] });

  useEffect(() => {
    const { mcq, debug } = loadQuestions(topic);

    const data = { mcq, debug };

    localStorage.setItem('quiz_questions', JSON.stringify(data));
    setSections(data);
  }, [topic]);

  const sectionKeys = ['mcq', 'debug'];

  const [currentSection, setCurrentSection] = useState('mcq');

  const [sectionIndex, setSectionIndex] = useState({
    mcq: 0,
    debug: 0,
  });

  const currentIndex = sectionIndex[currentSection];

  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState({});
  const [showSubmit, setShowSubmit] = useState(false);

  const [warnings, setWarnings] = useState(0);

  const [warningMsg, setWarningMsg] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const [quizEnded, setQuizEnded] = useState(false);

  const [endReason, setEndReason] = useState('');

  const totalQuestions = sections[currentSection]?.length || 0;

  // ================= SAVE STATE =================
  useEffect(() => {
    localStorage.setItem(
      'quiz_state',
      JSON.stringify({
        currentSection,
        sectionIndex,
        answers,
        visited,
      }),
    );
  }, [currentSection, sectionIndex, answers, visited]);

  // ================= TIMER =================
  const [remainingTime, setRemainingTime] = useState(1800);

  useEffect(() => {
    const start = Date.now();
    localStorage.setItem('quiz_start', start);

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const remaining = 1800 - elapsed;

      if (remaining <= 0) {
        clearInterval(interval);
        handleTimeUp();
      } else {
        setRemainingTime(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [topic]);

  // ================= FULLSCREEN =================
  useEffect(() => {
    if (quizRef.current) {
      quizRef.current.requestFullscreen().catch(() => {});
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        triggerWarning('Fullscreen exited');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // ================= TAB SWITCH =================
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        triggerWarning('Tab switch detected');
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const reEnterFullscreen = () => {
    if (quizRef.current) {
      quizRef.current.requestFullscreen().catch(() => {});
    }
  };

  const triggerWarning = (msg) => {
    setWarnings((prev) => {
      const newCount = prev + 1;

      setWarningMsg(msg);
      setShowWarning(true);

      if (newCount >= 5) {
        setQuizEnded(true);
        setEndReason('malpractice');
        setShowSubmit(true);
      }

      return newCount;
    });
  };

  // ================= NAV =================
  const markVisitedIfSkipped = () => {
    const key = `${currentSection}-${currentIndex}`;

    if (!answers[key]) {
      setVisited((prev) => ({
        ...prev,
        [key]: true,
      }));
    }
  };

  const nextQuestion = () => {
    if (quizEnded) return;

    markVisitedIfSkipped();

    if (currentIndex < totalQuestions - 1) {
      setSectionIndex((prev) => ({
        ...prev,
        [currentSection]: prev[currentSection] + 1,
      }));
    } else {
      const nextSectionIndex = sectionKeys.indexOf(currentSection) + 1;

      if (nextSectionIndex < sectionKeys.length) {
        setCurrentSection(sectionKeys[nextSectionIndex]);
      } else {
        setShowSubmit(true);
      }
    }
  };

  const prevQuestion = () => {
    if (quizEnded) return;

    if (currentIndex > 0) {
      setSectionIndex((prev) => ({
        ...prev,
        [currentSection]: prev[currentSection] - 1,
      }));
    }
  };

  const handleSetIndex = (i) => {
    if (quizEnded) return;

    setSectionIndex((prev) => ({
      ...prev,
      [currentSection]: i,
    }));

    setVisited((prev) => ({
      ...prev,
      [`${currentSection}-${i}`]: true,
    }));
  };

  const handleTimeUp = () => {
    setEndReason('timeout');
    setQuizEnded(true);

    setWarningMsg('Time is up!');
    setShowSubmit(true);
  };

  // ================= FIRST CLICK FULLSCREEN =================
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (quizRef.current && !document.fullscreenElement) {
        quizRef.current.requestFullscreen().catch(() => {});
      }

      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);

    return () => window.removeEventListener('click', handleFirstInteraction);
  }, []);

  // ================= CLEAN LOADING UI =================
  if (!sections.mcq.length && !sections.debug.length) {
    return (
      <div className="fixed inset-0 bg-[#f5f1e8] dark:bg-zinc-900 flex items-center justify-center text-black dark:text-white text-lg font-semibold">
        Loading Quiz...
      </div>
    );
  }

  return (
    <div
      ref={quizRef}
      className="bg-[#f5f1e8] dark:bg-zinc-900 min-h-screen overflow-y-auto text-black dark:text-white"
    >
      <div className="pt-36 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <SectionTabs
            current={currentSection}
            setCurrent={setCurrentSection}
          />
          <Timer duration={remainingTime} onTimeUp={handleTimeUp} />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Navigation
            total={totalQuestions}
            currentIndex={currentIndex}
            answers={answers}
            visited={visited}
            section={currentSection}
            setIndex={handleSetIndex}
          />

          <div className="md:col-span-3">
            <QuestionCard
              section={currentSection}
              index={currentIndex}
              question={sections[currentSection][currentIndex]}
              answer={answers[`${currentSection}-${currentIndex}`]}
              setAnswer={(val) => {
                if (quizEnded) return;

                setAnswers((prev) => ({
                  ...prev,
                  [`${currentSection}-${currentIndex}`]: val,
                }));

                setVisited((prev) => ({
                  ...prev,
                  [`${currentSection}-${currentIndex}`]: true,
                }));
              }}
            />

            <div className="flex justify-between mt-6">
              <button
                onClick={prevQuestion}
                disabled={currentIndex === 0 || quizEnded}
                className="px-5 py-2 rounded-full bg-white border dark:bg-white/10 disabled:opacity-40"
              >
                Previous
              </button>

              <button
                onClick={nextQuestion}
                disabled={quizEnded}
                className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {showWarning && warnings < 5 && (
        <WarningModal
          message={warningMsg}
          count={warnings}
          onClose={() => {
            setShowWarning(false);
            reEnterFullscreen();
          }}
        />
      )}

      {(showSubmit || quizEnded) && (
        <SubmitModal
          answers={answers}
          sections={sections}
          topic={topic} // 🔥 ADDED (CRITICAL)
          forceSubmit={quizEnded}
          reason={
            endReason === 'timeout' ? 'Time is up' : 'Malpractice detected'
          }
          onClose={() => setShowSubmit(false)}
          onSubmit={() => {
            localStorage.removeItem('quiz_state');
            localStorage.removeItem('quiz_start');
            localStorage.removeItem('quiz_warnings');
            localStorage.removeItem('quiz_ended');
            localStorage.removeItem('quiz_end_reason');
            localStorage.removeItem('quiz_questions');

            navigate('/practice/review');
          }}
        />
      )}
    </div>
  );
}
