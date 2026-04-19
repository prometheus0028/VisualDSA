export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  const formatText = (text) => {
    if (!text) return null;

    return text.split('\n').map((line, i) => {
      // 🔥 headings
      if (line.startsWith('📌')) {
        return (
          <p key={i} className="font-semibold text-lg mt-3 mb-2">
            {line.replace('📌', '')}
          </p>
        );
      }

      // 🔥 numbered list
      if (/^\d+\./.test(line)) {
        return (
          <p key={i} className="ml-4 mb-1">
            {line}
          </p>
        );
      }

      // 🔥 bullet points
      if (line.startsWith('-')) {
        return (
          <p key={i} className="ml-4 mb-1">
            🔹 {line.replace('-', '')}
          </p>
        );
      }

      return (
        <p key={i} className="mb-2 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`
        max-w-2xl px-5 py-3 rounded-2xl text-sm shadow-sm
        ${
          isUser ? 'bg-blue-500 text-white' : 'bg-white dark:bg-white/10 border'
        }
        `}
      >
        {formatText(message.content)}
      </div>
    </div>
  );
}
