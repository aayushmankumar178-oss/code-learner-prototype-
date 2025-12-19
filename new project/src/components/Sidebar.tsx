import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Award, FileText, Video, Code, User, Trophy, Zap, Users, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const navigation = [
  { name: 'Language Hub', href: '/app/hub', icon: Home },
  { name: 'Dashboard', href: '/app/dashboard', icon: BookOpen },
  { name: 'Progress', href: '/app/progress', icon: Award },
  { name: 'Notes Library', href: '/app/notes', icon: FileText },
  { name: 'Video Lessons', href: '/app/videos', icon: Video },
  { name: 'Code Playground', href: '/app/playground', icon: Code },
  { name: 'Daily Challenges', href: '/app/challenges', icon: Zap },
  { name: 'Leaderboard', href: '/app/leaderboard', icon: Trophy },
  { name: 'Community', href: '/app/community', icon: Users },
  { name: 'Profile', href: '/app/profile', icon: User },
  { name: 'Admin Panel', href: '/app/admin', icon: Shield },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/20 backdrop-blur-xl border-r border-white/10 px-6 pb-4">
          <Link to="/" className="flex h-20 shrink-0 items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#10b981] flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-white tracking-tight">CodeMaster Pro</span>
          </Link>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="relative group"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-active"
                          className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-lg"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <div className={`relative flex items-center gap-x-3 rounded-lg px-4 py-3 transition-all ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}>
                        <item.icon className={`w-5 h-5 ${isActive ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : ''}`} />
                        <span className="truncate">{item.name}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-black/30 backdrop-blur-xl border-t border-white/10">
        <nav className="flex justify-around py-2">
          {navigation.slice(0, 5).map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                  isActive ? 'text-[#10b981]' : 'text-gray-400'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
