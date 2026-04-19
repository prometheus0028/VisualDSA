import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          // Ignore:
          // - motion (framer motion import)
          // - Capital variables (React components)
          varsIgnorePattern:
            '^(useEffect|useMemo| isDoubly| isCircular| front|rear| warning| algorithm|backgroundY|scrollY|setSpeed|setWarning|setPlaying|start|sortedAlgorithms|fadeUp|motion|[A-Z_])',
          // Ignore unused function args starting with _
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
