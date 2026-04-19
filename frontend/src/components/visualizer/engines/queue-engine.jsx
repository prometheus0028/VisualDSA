/* eslint-disable no-unused-vars */
import { useState, useMemo, useRef, useEffect } from 'react';
import QueueVisualizer from '../visualizers/queue-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { createArrayQueue } from '../algorithms/queue/queue-array';
import { createLinkedQueue } from '../algorithms/queue/queue-linked-list';
import { createCircularQueue } from '../algorithms/queue/circular-queue';

export default function QueueEngine({ algorithm, onStepChange }) {
  const id = algorithm?.id;

  const isLinked = id === 'queue-using-linked-list';
  const isCircular = id === 'circular-queue';
  const isArray = id === 'queue-using-array';

  const [capacity, setCapacity] = useState(6);

  const initialQueue = useMemo(() => ['10', '20', '30'], []);

  const [queue, setQueue] = useState(initialQueue);
  const [front, setFront] = useState(0);
  const [rear, setRear] = useState(initialQueue.length - 1);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // ✅ NEW

  const algoRef = useRef(null);

  // =========================
  // INIT
  // =========================
  useEffect(() => {
    if (isArray) algoRef.current = createArrayQueue(capacity);
    else if (isLinked) algoRef.current = createLinkedQueue();
    else algoRef.current = createCircularQueue(capacity);
  }, [isArray, isLinked, isCircular, capacity]);

  // =========================
  // ENQUEUE
  // =========================
  const enqueue = () => {
    if (!input) return;

    if (!isLinked && queue.length >= capacity) {
      setMessage('Overflow');
      setIsError(true);
      onStepChange?.(6);
      return;
    }

    setIsError(false);

    setQueue((prev) => [...prev, input]);

    if (isCircular) {
      setRear((prev) => (prev + 1) % capacity);
    } else {
      setRear((prev) => prev + 1);
    }

    if (queue.length === 0) setFront(0);

    setMessage(`Enqueued ${input}`);
    setInput('');

    onStepChange?.(isLinked ? 18 : 11);
  };

  // =========================
  // DEQUEUE
  // =========================
  const dequeue = () => {
    if (queue.length === 0) {
      setMessage('Underflow');
      setIsError(true);
      onStepChange?.(isLinked ? 22 : 15);
      return;
    }

    setIsError(false);

    const removed = queue[0];

    setQueue((prev) => prev.slice(1));

    if (isCircular) {
      setFront((prev) => (prev + 1) % capacity);
    } else {
      setFront((prev) => prev + 1);
    }

    setMessage(`Dequeued ${removed}`);

    onStepChange?.(isLinked ? 28 : isCircular ? 19 : 17);
  };

  // =========================
  // PEEK
  // =========================
  const peek = () => {
    if (queue.length === 0) {
      setMessage('Queue is empty');
      setIsError(true);
      return;
    }

    setIsError(false);

    setMessage(`Front element is ${queue[0]}`);
    onStepChange?.(isLinked ? 31 : 22);
  };

  // =========================
  // RESET
  // =========================
  const reset = () => {
    const newQueue = initialQueue.slice(0, capacity);

    setQueue(newQueue);
    setFront(0);
    setRear(newQueue.length - 1);
    setMessage('');
    setIsError(false);

    onStepChange?.(null);
  };

  // =========================
  // UI
  // =========================
  const content = (
    <div className="space-y-6">
      {/* INPUT */}
      <div className="flex justify-center gap-4 items-center flex-wrap">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          className="w-56 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
        />

        {!isLinked && (
          <div className="flex items-center gap-2">
            <span className="text-sm">Size</span>
            <input
              type="number"
              min="1"
              max="30"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-16 px-2 py-1 border rounded text-black"
            />
          </div>
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={enqueue}
          className="px-4 py-2 bg-green-500 text-white rounded-full"
        >
          Enqueue
        </button>
        <button
          onClick={dequeue}
          className="px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Dequeue
        </button>
        <button
          onClick={peek}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Peek
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-full"
        >
          Reset
        </button>
      </div>

      {/* MESSAGE */}
      {message && (
        <div
          className={`p-3 rounded-xl text-center font-semibold
            ${
              isError
                ? 'bg-red-200 text-red-700 dark:bg-red-800 dark:text-red-200'
                : 'bg-purple-200 text-purple-700 dark:bg-purple-800 dark:text-purple-200'
            }`}
        >
          {message}
        </div>
      )}

      {/* VISUAL */}
      <QueueVisualizer
        queue={queue}
        frontIndex={queue.length > 0 ? 0 : -1}
        rearIndex={queue.length - 1}
        type={isLinked ? 'linked' : isCircular ? 'circular' : 'array'}
        capacity={!isLinked ? capacity : undefined}
      />
    </div>
  );

  return <FullscreenWrapper>{content}</FullscreenWrapper>;
}
