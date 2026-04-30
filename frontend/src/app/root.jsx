/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import App from './app';
import { useAuthStore } from '../store/auth.store';

export default function Root() {
  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    initAuth(); // 🔥 critical
  }, []);

  return <App />;
}
