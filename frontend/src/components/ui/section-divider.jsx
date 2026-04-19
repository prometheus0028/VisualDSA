export default function SectionDivider({ flip }) {
  return (
    <div className={`${flip ? 'rotate-180' : ''} overflow-hidden leading-none`}>
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-24 text-white dark:text-[#111]"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,85.3C1120,64,1280,32,1360,16L1440,0V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
        />
      </svg>
    </div>
  );
}
