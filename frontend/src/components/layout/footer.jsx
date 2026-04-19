import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LegalModal from '../legal/legal-modal';

export default function Footer() {
  const [legalType, setLegalType] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <footer className="bg-black text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">VisualDSA</h3>
            <p className="text-sm leading-relaxed">
              Master Data Structures & Algorithms through interactive
              visualization, AI-powered analysis, and adaptive testing.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate('/curriculum')}>
                  Curriculum
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/ai-tutor')}>
                  AI Analysis
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/practice')}>
                  Quiz Engine
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/dashboard')}>
                  Analytics Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setLegalType('documentation')}>
                  Documentation
                </button>
              </li>
              <li>
                <button onClick={() => setLegalType('community')}>
                  Community
                </button>
              </li>
              <li>
                <button onClick={() => setLegalType('support')}>Support</button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setLegalType('terms')}>
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => setLegalType('privacy')}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setLegalType('resources')}>
                  Platform Resources
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
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
