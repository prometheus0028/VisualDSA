import Modal from '../ui/modal';

export default function LegalModal({ open, onClose, type }) {
  if (!type) return null;

  const content = {
    terms: {
      title: 'Terms of Service',
      points: [
        'Use the platform only for personal learning.',
        'Do not misuse AI or attempt system abuse.',
        'Account security is your responsibility.',
        'All content is owned by VisualDSA.',
        'Terms may update over time.',
      ],
    },

    privacy: {
      title: 'Privacy Policy',
      points: [
        'We collect minimal user and activity data.',
        'Data is used to improve learning experience.',
        'No selling of personal data.',
        'Secure storage practices are followed.',
        'You control your account data.',
      ],
    },

    resources: {
      title: 'Platform Resources',
      points: [
        'Built-in curriculum and roadmap available.',
        'AI tutor for personalized guidance.',
        'Practice system for skill improvement.',
        'Analytics dashboard for tracking progress.',
        'Continuous updates to learning modules.',
      ],
    },

    documentation: {
      title: 'Documentation',
      points: [
        'Understand platform structure and flow.',
        'Learn how visualization engine works.',
        'Explore algorithm breakdowns.',
        'Use AI tools effectively.',
      ],
    },

    community: {
      title: 'Community',
      points: [
        'Collaborate with other learners.',
        'Discuss problem-solving approaches.',
        'Share strategies and insights.',
        'Grow with peer learning.',
      ],
    },

    support: {
      title: 'Support',
      points: [
        'Resolve technical issues quickly.',
        'Get help with platform features.',
        'Clarify doubts in usage.',
        'Ensure smooth experience.',
      ],
    },
  };

  const data = content[type];
  if (!data) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="
        w-full max-w-lg
        max-h-[90vh] overflow-y-auto
        bg-white dark:bg-zinc-900
        rounded-2xl border border-gray-200 dark:border-white/10
        p-5 sm:p-6 md:p-8
        "
      >
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-5 sm:mb-6">
          {data.title}
        </h2>

        {/* Content */}
        <div className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {data.points.map((p, i) => (
            <p key={i}>• {p}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            I Understand
          </button>
        </div>
      </div>
    </Modal>
  );
}
