import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1e3a8a] to-[#0f0f23] dark:from-[#0f0f23] dark:via-[#1e3a8a] dark:to-[#0f0f23]">
      <Sidebar />
      <div className="lg:pl-72">
        <Header />
        <main className="px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
