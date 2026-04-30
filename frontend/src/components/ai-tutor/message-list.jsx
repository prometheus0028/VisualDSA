import { useEffect, useRef } from 'react';
import MessageBubble from './message-bubble';

export default function MessageList({ messages }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages]);

  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        px-3 sm:px-6
        space-y-5
      "
    >
      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}

      {/* SCROLL ANCHOR */}
      <div ref={bottomRef} />
    </div>
  );
}
