export default function Section({
  children,
  className = '',
  size = 'default', // small | default | large
  id,
}) {
  const spacing = {
    small: 'py-10 sm:py-12 md:py-14',
    default: 'py-14 sm:py-16 md:py-20',
    large: 'py-20 sm:py-24 md:py-28',
  };

  return (
    <section
      id={id}
      className={`
        w-full
        ${spacing[size]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
