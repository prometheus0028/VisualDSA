export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4 sm:px-6 text-center">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-500">
          404
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
          Page not found.
        </p>
      </div>
    </div>
  );
}
