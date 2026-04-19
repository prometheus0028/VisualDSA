/* eslint-disable no-unused-vars */
import { useState, useMemo, useEffect } from 'react';
import HanoiVisualizer from '../visualizers/hanoi-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';
import { generateHanoiSteps } from '../algorithms/stack/tower-of-hanoi';

export default function HanoiEngine({ algorithm, onStepChange }) {
  const [diskCount, setDiskCount] = useState(3);
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const steps = useMemo(() => {
    return generateHanoiSteps(diskCount);
  }, [diskCount]);

  const rods = useMemo(() => {
    const rodsState = {
      A: Array.from({ length: diskCount }, (_, i) => diskCount - i),
      B: [],
      C: [],
    };

    for (let i = 0; i < currentStep; i++) {
      const step = steps[i];
      if (!step) break;

      const disk = rodsState[step.from].pop();
      rodsState[step.to].push(disk);
    }

    return rodsState;
  }, [currentStep, diskCount, steps]);

  useEffect(() => {
    if (!onStepChange) return;

    if (currentStep === 0) {
      onStepChange(null);
      return;
    }

    const step = steps[currentStep - 1];
    onStepChange(step?.highlightLine ?? null);
  }, [currentStep, steps, onStepChange]);

  useEffect(() => {
    if (!playing) return;
    if (currentStep >= steps.length) return;

    const timer = setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }, 700 / speed);

    return () => clearTimeout(timer);
  }, [playing, currentStep, steps.length, speed]);

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const reset = () => {
    setCurrentStep(0);
    setPlaying(false);
    onStepChange?.(null);
  };

  const progress = steps.length === 0 ? 0 : (currentStep / steps.length) * 100;

  const currentDescription =
    currentStep > 0
      ? `Move disk ${steps[currentStep - 1]?.disk} from ${steps[currentStep - 1]?.from} to ${steps[currentStep - 1]?.to}`
      : '';

  const content = (
    <div className="space-y-6">
      {/* INPUT */}
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-sm">Disks</span>
          <input
            type="number"
            min="1"
            max="6"
            value={diskCount}
            onChange={(e) => {
              const val = Number(e.target.value);
              setDiskCount(val);
              setCurrentStep(0);
              setPlaying(false);
              onStepChange?.(null);
            }}
            className="w-16 px-2 py-1 border rounded text-black"
          />
        </div>
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

      {/* MESSAGE (FIXED → PURPLE) */}
      {currentDescription && (
        <div
          className="p-3 rounded-xl text-center font-semibold
          bg-purple-200 text-purple-700
          dark:bg-purple-800 dark:text-purple-200"
        >
          {currentDescription}
        </div>
      )}

      {/* STEP */}
      <div className="text-center text-sm font-semibold">
        Step: {currentStep} / {steps.length}
      </div>

      {/* PROGRESS */}
      <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* VISUAL */}
      <HanoiVisualizer rods={rods} />
    </div>
  );

  return <FullscreenWrapper>{content}</FullscreenWrapper>;
}
