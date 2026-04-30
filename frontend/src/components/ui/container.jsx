export default function Container({ children, className = '', fluid = false }) {
  return (
    <div
      className={`
        w-full
        ${fluid ? '' : 'max-w-7xl mx-auto'}
        px-4 sm:px-6 md:px-8 lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}
