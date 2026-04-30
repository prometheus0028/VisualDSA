export default function Button({
  children,
  className = '',
  variant = 'primary', // primary | outline | ghost
  size = 'md', // sm | md | lg
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  };

  return (
    <button
      {...props}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
