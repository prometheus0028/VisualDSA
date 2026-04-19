import { useEffect, useRef } from 'react';
import MessageBubble from './message-bubble';

export default function MessageList({ messages }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="space-y-4">
      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
