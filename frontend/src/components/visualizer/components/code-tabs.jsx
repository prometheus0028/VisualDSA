import { useState } from 'react';

export default function CodeTabs({ code }) {
  const languages = Object.keys(code || {});
  const [active, setActive] = useState(languages[0] || '');

  if (!code || languages.length === 0) {
    return (
      <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 border">
        <p className="text-sm text-gray-500">No code available.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border overflow-hidden">
      {/* TAB HEADER */}
      <div className="flex border-b dark:border-white/10">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActive(lang)}
            className={`px-6 py-3 text-sm font-semibold transition ${
              active === lang
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CODE BLOCK */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm whitespace-pre-wrap leading-relaxed">
          <code>{code[active]}</code>
        </pre>
      </div>
    </div>
  );
}
