import { googleLogin } from '../../services/auth.service';

const googlebutton = () => {
  return (
    <button
      onClick={googleLogin}
      className="w-full flex items-center justify-center gap-3 bg-white border rounded-xl py-2 mt-2 hover:scale-105 transition"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
};

export default googlebutton;
