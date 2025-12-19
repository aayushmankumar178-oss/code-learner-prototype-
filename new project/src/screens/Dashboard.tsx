import { motion } from 'motion/react';
import { Flame, Target, Clock, TrendingUp, Award, BookOpen } from 'lucide-react';
import { ProgressCircle } from '../components/ProgressCircle';

export function Dashboard() {
  const stats = [
    { label: 'Current Streak', value: '12', unit: 'days', icon: Flame, color: 'text-orange-500' },
    { label: 'Total XP', value: '2,450', unit: 'points', icon: Award, color: 'text-amber-400' },
    { label: 'Hours Learned', value: '47', unit: 'hours', icon: Clock, color: 'text-blue-400' },
    { label: 'Courses Completed', value: '8', unit: 'courses', icon: BookOpen, color: 'text-emerald-400' },
  ];

  const recentActivity = [
    { course: 'JavaScript Basics', progress: 85, xp: 120, time: '2 hours ago' },
    { course: 'React Hooks', progress: 60, xp: 95, time: '1 day ago' },
    { course: 'Python Functions', progress: 100, xp: 150, time: '2 days ago' },
    { course: 'SQL Queries', progress: 45, xp: 75, time: '3 days ago' },
  ];

  const weeklyProgress = [
    { day: 'Mon', xp: 120 },
    { day: 'Tue', xp: 180 },
    { day: 'Wed', xp: 90 },
    { day: 'Thu', xp: 220 },
    { day: 'Fri', xp: 160 },
    { day: 'Sat', xp: 200 },
    { day: 'Sun', xp: 140 },
  ];

  const maxXP = Math.max(...weeklyProgress.map(d => d.xp));

  return (
    <div className="p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2">Welcome back, Alex! 👋</h2>
          <p className="opacity-70">Here's your learning progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Overall Progress */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h4 className="mb-6">Overall Progress</h4>
            <div className="flex justify-center mb-6">
              <ProgressCircle percentage={68} size={160} label="Complete" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Completed Lessons</span>
                <span>156/230</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Active Courses</span>
                <span>4</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Certificates Earned</span>
                <span>3</span>
              </div>
            </div>
          </motion.div>

          {/* Weekly Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6 lg:col-span-2"
          >
            <h4 className="mb-6">Weekly Activity</h4>
            <div className="flex items-end justify-between gap-2 h-48">
              {weeklyProgress.map((day, index) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(day.xp / maxXP) * 100}%` }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg min-h-[20px] relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
                      {day.xp} XP
                    </div>
                  </motion.div>
                  <span className="text-xs opacity-70">{day.day}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h4>Recent Activity</h4>
            <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex-1">
                  <h6 className="mb-1">{activity.course}</h6>
                  <p className="text-sm opacity-70">{activity.time}</p>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-amber-400 mb-1">+{activity.xp} XP</div>
                  <div className="text-xs opacity-70">{activity.progress}% complete</div>
                </div>

                <div className="w-24">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activity.progress}%` }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Daily Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 glass-card p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30"
        >
          <div className="flex items-center gap-4">
            <Target className="w-12 h-12 text-emerald-400" />
            <div className="flex-1">
              <h5 className="mb-1">Daily Goal Progress</h5>
              <p className="text-sm opacity-70 mb-2">Complete 3 more lessons to reach your daily goal!</p>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '70%' }}
                  transition={{ delay: 1 }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                />
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl">7/10</div>
              <div className="text-sm opacity-70">Lessons</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
