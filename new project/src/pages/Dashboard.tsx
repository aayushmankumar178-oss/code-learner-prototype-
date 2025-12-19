import { BookOpen, Award, Clock, Flame, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { languages } from '../data/languages';
import StatCard from '../components/ui/StatCard';
import GlassCard from '../components/ui/GlassCard';
import ProgressCircle from '../components/ui/ProgressCircle';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { day: 'Mon', xp: 120 },
  { day: 'Tue', xp: 200 },
  { day: 'Wed', xp: 150 },
  { day: 'Thu', xp: 280 },
  { day: 'Fri', xp: 320 },
  { day: 'Sat', xp: 250 },
  { day: 'Sun', xp: 180 },
];

export default function Dashboard() {
  const { user } = useAuth();
  const inProgressCourses = languages.filter(l => l.progress > 0 && l.progress < 100);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Welcome back, {user?.name}! 👋</h1>
        <p className="text-gray-400 text-lg">Continue your learning journey</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={BookOpen} label="Courses Enrolled" value={12} color="#3b82f6" trend={8} />
        <StatCard icon={Award} label="Total XP" value={user?.xp.toLocaleString() || 0} color="#10b981" trend={15} />
        <StatCard icon={Flame} label="Day Streak" value={user?.streak || 0} color="#f59e0b" trend={5} />
        <StatCard icon={Target} label="Lessons Completed" value={247} color="#ec4899" trend={12} />
      </div>

      {/* Weekly Progress Chart */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white text-2xl mb-2">Weekly Activity</h2>
            <p className="text-gray-400">Your XP progress this week</p>
          </div>
          <div className="flex items-center gap-2 text-[#10b981]">
            <TrendingUp className="w-5 h-5" />
            <span>+22% from last week</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={weeklyData}>
            <defs>
              <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area
              type="monotone"
              dataKey="xp"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#xpGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Courses in Progress */}
      <div>
        <h2 className="text-white text-3xl mb-6">Continue Learning</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgressCourses.slice(0, 6).map((course) => (
            <GlassCard key={course.id} className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${course.color}20` }}
                >
                  {course.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl mb-2">{course.name}</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: course.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="text-gray-400 text-sm">{course.progress}%</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Daily Challenge */}
      <GlassCard className="p-8" glow>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white text-2xl">Daily Challenge</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Complete today's challenge to maintain your streak!
            </p>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#f59e0b] to-[#ef4444] text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all">
              Start Challenge
            </button>
          </div>
          <div className="hidden lg:block">
            <ProgressCircle progress={65} size={140} color="#f59e0b" />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
