import { googleLogin } from '../../services/auth.service';

const googlebutton = () => {
  return (
    <button
      onClick={googleLogin}
      className="
        w-full flex items-center justify-center gap-3
        px-4 py-2.5 sm:py-3
        rounded-xl
        bg-white dark:bg-zinc-800
        border border-gray-300 dark:border-white/10
        text-sm sm:text-base font-medium
        shadow-sm hover:shadow-md
        transition-all duration-200
        active:scale-[0.98]
      "
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />

      <span className="whitespace-nowrap">Continue with Google</span>
    </button>
  );
};

export default googlebutton;
