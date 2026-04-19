/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useEffect } from 'react';
import ExpressionVisualizer from '../visualizers/expression-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateInfixToPostfixSteps } from '../algorithms/stack/infix-to-postfix';
import { generatePostfixEvaluationSteps } from '../algorithms/stack/postfix-evaluation';

export default function ExpressionEngine({ algorithm, onStepChange }) {
  const isInfix = algorithm?.id === 'infix-to-postfix';
  const isPostfix = algorithm?.id === 'postfix-evaluation';

  const [expression, setExpression] = useState(
    isPostfix ? '3 12 4 2 - 2 ^ * +' : '3+12*(4-2)^2',
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [message, setMessage] = useState('');
  const [warning, setWarning] = useState('');

  // ===============================
  // STEP GENERATION (SAFE)
  // ===============================

  const { steps, invalid } = useMemo(() => {
    try {
      let result;

      if (isInfix) result = generateInfixToPostfixSteps(expression);
      else if (isPostfix) result = generatePostfixEvaluationSteps(expression);

      if (Array.isArray(result)) return { steps: result, invalid: false };

      return {
        steps: result?.steps || [],
        invalid: result?.invalid || false,
      };
    } catch (e) {
      console.error(e);
      return { steps: [], invalid: true };
    }
  }, [expression, isInfix, isPostfix]);

  const safeSteps = Array.isArray(steps) ? steps : [];

  // ===============================
  // MESSAGE
  // ===============================

  useEffect(() => {
    const step = safeSteps[currentStep];
    if (step?.action) setMessage(step.action);
  }, [currentStep, safeSteps]);

  // ===============================
  // WARNING
  // ===============================

  useEffect(() => {
    if (isPostfix && invalid) {
      setWarning('⚠ Invalid Postfix Expression');
    } else {
      setWarning('');
    }
  }, [invalid, isPostfix]);

  // ===============================
  // PLAY LOOP
  // ===============================

  useEffect(() => {
    if (!playing || invalid) return;
    if (!safeSteps.length) return;
    if (currentStep >= safeSteps.length - 1) return;

    const timer = setTimeout(() => {
      setCurrentStep((p) => p + 1);
    }, 700 / speed);

    return () => clearTimeout(timer);
  }, [playing, currentStep, safeSteps.length, speed, invalid]);

  // ===============================
  // PSEUDOCODE SYNC
  // ===============================

  useEffect(() => {
    onStepChange?.(safeSteps[currentStep]?.highlightLine ?? null);
  }, [currentStep, safeSteps, onStepChange]);

  const reset = () => {
    setCurrentStep(0);
    setPlaying(false);
    setMessage('');
  };

  const next = () =>
    setCurrentStep((p) => Math.min(p + 1, safeSteps.length - 1));

  const prev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const current = safeSteps[currentStep] || {
    stack: [],
    output: '',
    currentChar: null,
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* WARNING */}
        {warning && (
          <div
            className="p-3 rounded-xl text-center font-semibold
            bg-red-100 text-red-700
            dark:bg-red-900 dark:text-red-200"
          >
            {warning}
          </div>
        )}

        {/* INPUT */}
        <div className="flex justify-center">
          <input
            value={expression}
            onChange={(e) => {
              setExpression(e.target.value);
              reset();
            }}
            className="w-72 px-4 py-2 rounded-xl border
              bg-white/80 dark:bg-white/10 backdrop-blur-xl"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="px-4 py-2 bg-black text-white rounded-full"
          >
            {playing ? 'Pause' : 'Play'}
          </button>

          <button
            onClick={prev}
            className="px-4 py-2 bg-gray-500 text-white rounded-full"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Next
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 bg-red-500 text-white rounded-full"
          >
            Reset
          </button>
        </div>

        {/* MESSAGE */}
        {message && (
          <div
            className="p-3 rounded-xl text-center font-semibold
            bg-purple-200 text-purple-700
            dark:bg-purple-800 dark:text-purple-200"
          >
            {message}
          </div>
        )}

        {/* SPEED */}
        <div className="flex justify-center items-center gap-4">
          <span>Speed</span>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span>{speed}x</span>
        </div>

        {/* VISUAL */}
        <ExpressionVisualizer
          input={expression}
          stack={current.stack}
          output={current.output}
          currentChar={current.currentChar}
        />
      </div>
    </FullscreenWrapper>
  );
}
