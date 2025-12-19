import { Trophy, Target, Flame, Award, TrendingUp, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { languages } from '../data/languages';
import GlassCard from '../components/ui/GlassCard';
import ProgressCircle from '../components/ui/ProgressCircle';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const weeklyProgress = [
  { week: 'Week 1', xp: 850 },
  { week: 'Week 2', xp: 1200 },
  { week: 'Week 3', xp: 950 },
  { week: 'Week 4', xp: 1400 },
  { week: 'Week 5', xp: 1650 },
  { week: 'Week 6', xp: 1800 },
];

const skillsData = [
  { skill: 'Frontend', score: 85 },
  { skill: 'Backend', score: 70 },
  { skill: 'Database', score: 75 },
  { skill: 'Algorithms', score: 65 },
  { skill: 'Testing', score: 60 },
];

const achievements = [
  { icon: '🏆', title: 'First Steps', description: 'Complete your first lesson', unlocked: true },
  { icon: '⚡', title: 'Speed Demon', description: 'Complete 5 lessons in one day', unlocked: true },
  { icon: '🔥', title: 'Week Warrior', description: '7-day streak', unlocked: true },
  { icon: '🎯', title: 'Perfect Score', description: 'Get 100% on a quiz', unlocked: true },
  { icon: '🌟', title: 'Course Master', description: 'Complete an entire course', unlocked: false },
  { icon: '👑', title: 'Top 10', description: 'Reach top 10 on leaderboard', unlocked: false },
];

const milestones = [
  { xp: 1000, title: 'Beginner', achieved: true },
  { xp: 5000, title: 'Intermediate', achieved: true },
  { xp: 10000, title: 'Advanced', achieved: true },
  { xp: 25000, title: 'Expert', achieved: false, current: true },
  { xp: 50000, title: 'Master', achieved: false },
];

export default function Progress() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Progress Tracker</h1>
        <p className="text-gray-400 text-lg">Track your learning journey and achievements</p>
      </motion.div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <GlassCard className="p-6" glow>
          <div className="flex items-center justify-between mb-4">
            <Trophy className="w-8 h-8 text-[#f59e0b]" />
            <span className="text-gray-400">Level</span>
          </div>
          <div className="text-white text-4xl mb-2">{user?.level}</div>
          <div className="text-gray-400 text-sm">Next: {user ? user.level + 1 : 0} ({user ? 500 - (user.xp % 500) : 0} XP needed)</div>
        </GlassCard>

        <GlassCard className="p-6" glow>
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-[#3b82f6]" />
            <span className="text-gray-400">Total XP</span>
          </div>
          <div className="text-white text-4xl mb-2">{user?.xp.toLocaleString()}</div>
          <div className="text-[#10b981] text-sm">+1,250 this week</div>
        </GlassCard>

        <GlassCard className="p-6" glow>
          <div className="flex items-center justify-between mb-4">
            <Flame className="w-8 h-8 text-[#ef4444]" />
            <span className="text-gray-400">Streak</span>
          </div>
          <div className="text-white text-4xl mb-2">{user?.streak}</div>
          <div className="text-gray-400 text-sm">days in a row</div>
        </GlassCard>

        <GlassCard className="p-6" glow>
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-[#10b981]" />
            <span className="text-gray-400">Achievements</span>
          </div>
          <div className="text-white text-4xl mb-2">
            {achievements.filter(a => a.unlocked).length}/{achievements.length}
          </div>
          <div className="text-gray-400 text-sm">unlocked</div>
        </GlassCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* XP Progress Chart */}
        <GlassCard className="p-6">
          <h2 className="text-white text-2xl mb-6">XP Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="week" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line
                type="monotone"
                dataKey="xp"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Skills Radar */}
        <GlassCard className="p-6">
          <h2 className="text-white text-2xl mb-6">Skills Assessment</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillsData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="skill" stroke="#9ca3af" />
              <PolarRadiusAxis stroke="#9ca3af" />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Course Progress */}
      <GlassCard className="p-6">
        <h2 className="text-white text-2xl mb-6">Course Completion</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.slice(0, 6).map((lang) => (
            <div key={lang.id} className="flex items-center gap-4">
              <ProgressCircle
                progress={lang.progress}
                size={80}
                strokeWidth={6}
                color={lang.color}
              />
              <div>
                <h3 className="text-white mb-1">{lang.name}</h3>
                <p className="text-gray-400 text-sm">{lang.lessons} lessons</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Achievements */}
      <div>
        <h2 className="text-white text-3xl mb-6">Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard className={`p-6 ${!achievement.unlocked ? 'opacity-50' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div>
                    <h3 className="text-white text-lg mb-1">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                    {achievement.unlocked && (
                      <div className="mt-2 inline-flex items-center gap-1 text-[#10b981] text-sm">
                        <Award className="w-4 h-4" />
                        <span>Unlocked</span>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <GlassCard className="p-8">
        <h2 className="text-white text-2xl mb-8">Learning Milestones</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/10" />
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center gap-6">
                <div className={`
                  relative z-10 w-16 h-16 rounded-full flex items-center justify-center
                  ${milestone.achieved
                    ? 'bg-gradient-to-br from-[#10b981] to-[#059669]'
                    : milestone.current
                    ? 'bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] animate-pulse'
                    : 'bg-white/10'
                  }
                `}>
                  {milestone.achieved ? (
                    <Trophy className="w-8 h-8 text-white" />
                  ) : (
                    <span className="text-white">{milestone.xp / 1000}K</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl mb-1">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.xp.toLocaleString()} XP</p>
                  {milestone.current && (
                    <div className="mt-2 max-w-md">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-full"
                          style={{ width: `${((user?.xp || 0) / milestone.xp) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
