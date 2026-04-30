import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LegalModal from '../legal/legal-modal';

export default function Footer() {
  const [legalType, setLegalType] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <footer className="bg-black text-gray-400 py-12 sm:py-14 md:py-16 px-4 sm:px-6">
        <div
          className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-10
        "
        >
          {/* ================= BRAND ================= */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base sm:text-lg">
              VisualDSA
            </h3>

            <p className="text-sm sm:text-base leading-relaxed">
              Master Data Structures & Algorithms through interactive
              visualization, AI-powered analysis, and adaptive testing.
            </p>

            {/* 🔥 MADE BY */}
            <p className="text-sm">made with love &lt;3 by sarthak</p>

            {/* ================= SOCIALS ================= */}
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-3">
                Connect
              </h4>

              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/prometheus0028"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    {/* GitHub SVG */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.6.1.82-.26.82-.58v-2.03c-3.25.7-3.94-1.57-3.94-1.57-.53-1.35-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.1-.76.41-1.28.75-1.57-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.5.12-3.13 0 0 1-.32 3.3 1.2a11.4 11.4 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.63.24 2.83.12 3.13.76.82 1.22 1.86 1.22 3.14 0 4.52-2.75 5.5-5.37 5.8.42.36.8 1.08.8 2.18v3.23c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                    </svg>
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/sarthak-vashisht-27882b3a2/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    {/* LinkedIn SVG */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.21 8.09h4.56V24H.21V8.09zM8.34 8.09h4.37v2.17h.06c.61-1.15 2.11-2.37 4.34-2.37 4.64 0 5.49 3.05 5.49 7.02V24h-4.56v-7.75c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.1V24H8.34V8.09z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ================= PLATFORM ================= */}
          <div>
            <h4 className="text-white mb-4 font-semibold text-sm sm:text-base">
              Platform
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/curriculum')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Curriculum
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate('/ai-tutor')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  AI Analysis
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate('/practice')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Quiz Engine
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Analytics Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* ================= RESOURCES ================= */}
          <div>
            <h4 className="text-white mb-4 font-semibold text-sm sm:text-base">
              Resources
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setLegalType('documentation')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Documentation
                </button>
              </li>

              <li>
                <button
                  onClick={() => setLegalType('community')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Community
                </button>
              </li>

              <li>
                <button
                  onClick={() => setLegalType('support')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* ================= LEGAL ================= */}
          <div>
            <h4 className="text-white mb-4 font-semibold text-sm sm:text-base">
              Legal
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setLegalType('terms')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Terms of Service
                </button>
              </li>

              <li>
                <button
                  onClick={() => setLegalType('privacy')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  onClick={() => setLegalType('resources')}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  Platform Resources
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-gray-500">
          ©️ 2026 VisualDSA. All rights reserved.
        </div>
      </footer>

      <LegalModal
        open={legalType !== null}
        onClose={() => setLegalType(null)}
        type={legalType}
      />
    </>
  );
}
