import { useAuthStore } from '../store/auth.store';

export const useAuth = () => {
  const { user, session, setAuth, logout } = useAuthStore();

  const isAuthenticated = !!session;

  return {
    user,
    session,
    isAuthenticated,
    setAuth,
    logout,
  };
};
