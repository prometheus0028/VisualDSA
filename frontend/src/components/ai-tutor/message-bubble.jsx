export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  const formatText = (text) => {
    if (!text) return null;

    return text.split('\n').map((line, i) => {
      if (line.startsWith('📌')) {
        return (
          <p key={i} className="font-semibold text-base sm:text-lg mt-4 mb-2">
            {line.replace('📌', '')}
          </p>
        );
      }

      if (/^\d+\./.test(line)) {
        return (
          <p key={i} className="ml-4 mb-1 text-sm sm:text-base">
            {line}
          </p>
        );
      }

      if (line.startsWith('-')) {
        return (
          <p key={i} className="ml-4 mb-1 text-sm sm:text-base">
            🔹 {line.replace('-', '')}
          </p>
        );
      }

      return (
        <p key={i} className="mb-2 leading-relaxed text-sm sm:text-base">
          {line}
        </p>
      );
    });
  };

  return (
    <div
      className={`
        w-full flex
        ${isUser ? 'justify-end' : 'justify-start'}
      `}
    >
      <div
        className={`
          max-w-[85%] sm:max-w-2xl
          px-4 sm:px-5
          py-2.5 sm:py-3
          rounded-2xl
          text-sm sm:text-base
          shadow-sm
          break-words
          whitespace-pre-wrap
          ${isUser ? 'bg-blue-500 dark:bg-blue-700 text-white' : 'bg-white dark:bg-white/5 border'}
        `}
      >
        {formatText(message.content)}
      </div>
    </div>
  );
}
