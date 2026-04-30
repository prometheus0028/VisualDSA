import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* 🔥 MAIN CONTENT */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
