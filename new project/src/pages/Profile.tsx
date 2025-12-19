import { useState } from 'react';
import { Camera, Mail, Calendar, MapPin, Award, Code, Trophy, Flame, Settings, Bell, Lock, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import ProgressCircle from '../components/ui/ProgressCircle';

const badges = [
  { icon: '🏆', name: 'First Course', earned: true },
  { icon: '⚡', name: 'Speed Learner', earned: true },
  { icon: '🔥', name: 'Week Streak', earned: true },
  { icon: '🎯', name: 'Perfect Quiz', earned: true },
  { icon: '💎', name: 'Premium Member', earned: false },
  { icon: '👑', name: 'Top Rank', earned: false },
];

const recentActivity = [
  { action: 'Completed', item: 'JavaScript ES6 Module', time: '2 hours ago', color: '#10b981' },
  { action: 'Started', item: 'React Hooks Course', time: '5 hours ago', color: '#3b82f6' },
  { action: 'Earned', item: 'Speed Learner Badge', time: '1 day ago', color: '#f59e0b' },
  { action: 'Achieved', item: '30-day Streak', time: '2 days ago', color: '#ef4444' },
];

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'settings' | 'preferences'>('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: false,
  });

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Profile & Settings</h1>
        <p className="text-gray-400 text-lg">Manage your account and preferences</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10">
        {[
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'settings', label: 'Settings', icon: Settings },
          { id: 'preferences', label: 'Preferences', icon: Bell },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex items-center gap-2 px-6 py-3 transition-all
              ${activeTab === tab.id
                ? 'text-white border-b-2 border-[#10b981]'
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'profile' && (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard className="p-8 text-center" glow>
              <div className="relative inline-block mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-[#10b981]"
                />
                <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#10b981] flex items-center justify-center hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5 text-white" />
                </button>
              </div>

              <h2 className="text-white text-2xl mb-2">{user.name}</h2>
              <p className="text-gray-400 mb-6">{user.email}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Level</span>
                  <span className="text-white">{user.level}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total XP</span>
                  <span className="text-white">{user.xp.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Streak</span>
                  <span className="text-white">{user.streak} days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Joined</span>
                  <span className="text-white">Jan 2024</span>
                </div>
              </div>

              <GradientButton className="w-full" variant="success">
                Edit Profile
              </GradientButton>
            </GlassCard>

            {/* Quick Stats */}
            <GlassCard className="p-6">
              <h3 className="text-white text-lg mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#f59e0b] mx-auto mb-2" />
                  <div className="text-white text-2xl mb-1">24</div>
                  <p className="text-gray-400 text-xs">Courses</p>
                </div>
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-[#10b981] mx-auto mb-2" />
                  <div className="text-white text-2xl mb-1">128</div>
                  <p className="text-gray-400 text-xs">Lessons</p>
                </div>
                <div className="text-center">
                  <Code className="w-8 h-8 text-[#3b82f6] mx-auto mb-2" />
                  <div className="text-white text-2xl mb-1">56</div>
                  <p className="text-gray-400 text-xs">Projects</p>
                </div>
                <div className="text-center">
                  <Flame className="w-8 h-8 text-[#ef4444] mx-auto mb-2" />
                  <div className="text-white text-2xl mb-1">{user.streak}</div>
                  <p className="text-gray-400 text-xs">Days</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Badges & Achievements */}
            <GlassCard className="p-6">
              <h3 className="text-white text-2xl mb-6">Badges & Achievements</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                      text-center p-4 rounded-xl border border-white/10
                      ${badge.earned ? 'bg-gradient-to-br from-[#f59e0b]/20 to-[#ef4444]/20' : 'bg-white/5 opacity-50'}
                    `}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <p className="text-white text-xs">{badge.name}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Learning Progress */}
            <GlassCard className="p-6">
              <h3 className="text-white text-2xl mb-6">Learning Progress</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <ProgressCircle progress={75} size={120} color="#10b981" />
                  <p className="text-white mt-4">Overall Progress</p>
                </div>
                <div className="text-center">
                  <ProgressCircle progress={60} size={120} color="#3b82f6" />
                  <p className="text-white mt-4">This Month</p>
                </div>
                <div className="text-center">
                  <ProgressCircle progress={85} size={120} color="#f59e0b" />
                  <p className="text-white mt-4">Quiz Average</p>
                </div>
              </div>
            </GlassCard>

            {/* Recent Activity */}
            <GlassCard className="p-6">
              <h3 className="text-white text-2xl mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: activity.color }}
                    />
                    <div className="flex-1">
                      <p className="text-white">
                        <span style={{ color: activity.color }}>{activity.action}</span> {activity.item}
                      </p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="max-w-3xl">
          <GlassCard className="p-8 space-y-6">
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Bio</label>
              <textarea
                rows={4}
                placeholder="Tell us about yourself..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none"
              />
            </div>
            <div className="flex gap-4">
              <GradientButton variant="success">Save Changes</GradientButton>
              <GradientButton variant="secondary">Cancel</GradientButton>
            </div>
          </GlassCard>
        </div>
      )}

      {activeTab === 'preferences' && (
        <div className="max-w-3xl space-y-6">
          <GlassCard className="p-8">
            <h3 className="text-white text-xl mb-6">Notifications</h3>
            <div className="space-y-4">
              {[
                { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                { key: 'push', label: 'Push Notifications', desc: 'Browser push notifications' },
                { key: 'weekly', label: 'Weekly Summary', desc: 'Get weekly progress reports' },
              ].map((pref) => (
                <div key={pref.key} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <div>
                    <p className="text-white">{pref.label}</p>
                    <p className="text-gray-400 text-sm">{pref.desc}</p>
                  </div>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, [pref.key]: !prev[pref.key as keyof typeof prev] }))}
                    className={`
                      relative w-12 h-6 rounded-full transition-colors
                      ${notifications[pref.key as keyof typeof notifications] ? 'bg-[#10b981]' : 'bg-white/20'}
                    `}
                  >
                    <div className={`
                      absolute top-1 w-4 h-4 rounded-full bg-white transition-transform
                      ${notifications[pref.key as keyof typeof notifications] ? 'translate-x-7' : 'translate-x-1'}
                    `} />
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-white text-xl mb-6">Privacy</h3>
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Lock className="w-5 h-5 text-[#3b82f6] inline mr-3" />
                <span className="text-white">Change Password</span>
              </button>
              <button className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Settings className="w-5 h-5 text-[#10b981] inline mr-3" />
                <span className="text-white">Privacy Settings</span>
              </button>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
