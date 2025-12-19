import { useState } from 'react';
import { Trophy, Medal, Crown, TrendingUp, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/ui/GlassCard';

const leaderboardData = [
  { rank: 1, name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', xp: 28450, level: 32, streak: 89, change: 0 },
  { rank: 2, name: 'Marcus Rodriguez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', xp: 26820, level: 30, streak: 72, change: 1 },
  { rank: 3, name: 'Emily Watson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', xp: 24960, level: 28, streak: 65, change: -1 },
  { rank: 4, name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', xp: 22340, level: 26, streak: 58, change: 2 },
  { rank: 5, name: 'Lisa Anderson', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', xp: 20180, level: 24, streak: 51, change: 0 },
  { rank: 6, name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', xp: 18920, level: 23, streak: 47, change: -2 },
  { rank: 7, name: 'Nina Patel', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400', xp: 17450, level: 21, streak: 43, change: 1 },
  { rank: 8, name: 'Alex Turner', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', xp: 16200, level: 20, streak: 39, change: 3 },
  { rank: 9, name: 'Sophia Lee', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', xp: 15680, level: 19, streak: 36, change: -1 },
  { rank: 10, name: 'Ryan Foster', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400', xp: 14920, level: 18, streak: 33, change: 0 },
  { rank: 11, name: 'Maria Garcia', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400', xp: 13840, level: 17, streak: 30, change: 2 },
  { rank: 12, name: 'Chris Johnson', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400', xp: 12960, level: 16, streak: 28, change: -1 },
  { rank: 13, name: 'Zara Ahmed', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', xp: 12450, level: 16, streak: 25, change: 1 },
  { rank: 14, name: 'Tom Bradley', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400', xp: 11890, level: 15, streak: 23, change: 0 },
  { rank: 15, name: 'Hannah Moore', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', xp: 11320, level: 14, streak: 21, change: -2 },
];

const timeframes = ['All Time', 'This Month', 'This Week', 'Today'];

export default function Leaderboard() {
  const { user } = useAuth();
  const [selectedTimeframe, setSelectedTimeframe] = useState('All Time');
  
  const userRank = leaderboardData.findIndex(u => u.name === user?.name) + 1 || 8;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Global Leaderboard</h1>
        <p className="text-gray-400 text-lg">
          Compete with learners worldwide and climb to the top
        </p>
      </motion.div>

      {/* Timeframe Filter */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {timeframes.map(timeframe => (
          <button
            key={timeframe}
            onClick={() => setSelectedTimeframe(timeframe)}
            className={`
              px-6 py-3 rounded-lg whitespace-nowrap transition-all
              ${selectedTimeframe === timeframe
                ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }
            `}
          >
            {timeframe}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* 2nd Place */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:order-1"
        >
          <GlassCard className="p-6 text-center" glow>
            <div className="relative inline-block mb-4">
              <img
                src={leaderboardData[1].avatar}
                alt={leaderboardData[1].name}
                className="w-24 h-24 rounded-full border-4 border-gray-400"
              />
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
                <Medal className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-white text-xl mb-1">{leaderboardData[1].name}</h3>
            <p className="text-gray-400 mb-3">Level {leaderboardData[1].level}</p>
            <div className="text-3xl mb-2 text-white">{leaderboardData[1].xp.toLocaleString()}</div>
            <p className="text-gray-400 text-sm">XP</p>
          </GlassCard>
        </motion.div>

        {/* 1st Place */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:order-2"
        >
          <GlassCard className="p-8 text-center bg-gradient-to-br from-[#f59e0b]/20 to-[#ef4444]/20" glow>
            <div className="relative inline-block mb-4">
              <img
                src={leaderboardData[0].avatar}
                alt={leaderboardData[0].name}
                className="w-32 h-32 rounded-full border-4 border-[#f59e0b]"
              />
              <div className="absolute -top-4 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center animate-pulse">
                <Crown className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-white text-2xl mb-1">{leaderboardData[0].name}</h3>
            <p className="text-gray-400 mb-3">Level {leaderboardData[0].level}</p>
            <div className="text-4xl mb-2 text-white">{leaderboardData[0].xp.toLocaleString()}</div>
            <p className="text-gray-400 text-sm">XP</p>
          </GlassCard>
        </motion.div>

        {/* 3rd Place */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:order-3"
        >
          <GlassCard className="p-6 text-center" glow>
            <div className="relative inline-block mb-4">
              <img
                src={leaderboardData[2].avatar}
                alt={leaderboardData[2].name}
                className="w-24 h-24 rounded-full border-4 border-[#cd7f32]"
              />
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#cd7f32] flex items-center justify-center">
                <Medal className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-white text-xl mb-1">{leaderboardData[2].name}</h3>
            <p className="text-gray-400 mb-3">Level {leaderboardData[2].level}</p>
            <div className="text-3xl mb-2 text-white">{leaderboardData[2].xp.toLocaleString()}</div>
            <p className="text-gray-400 text-sm">XP</p>
          </GlassCard>
        </motion.div>
      </div>

      {/* Your Rank */}
      {user && (
        <GlassCard className="p-6 bg-gradient-to-r from-[#3b82f6]/10 to-[#10b981]/10" glow>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#10b981] flex items-center justify-center">
              <span className="text-white text-xl">#{userRank}</span>
            </div>
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full border-2 border-[#10b981]"
            />
            <div className="flex-1">
              <h3 className="text-white text-xl mb-1">Your Rank</h3>
              <p className="text-gray-400">Level {user.level} • {user.xp.toLocaleString()} XP</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-[#10b981] mb-1">
                <TrendingUp className="w-5 h-5" />
                <span>+3 this week</span>
              </div>
              <p className="text-gray-400 text-sm">{user.streak} day streak</p>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Full Leaderboard */}
      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-gray-400">Rank</th>
                <th className="px-6 py-4 text-left text-gray-400">User</th>
                <th className="px-6 py-4 text-left text-gray-400">Level</th>
                <th className="px-6 py-4 text-left text-gray-400">XP</th>
                <th className="px-6 py-4 text-left text-gray-400">Streak</th>
                <th className="px-6 py-4 text-left text-gray-400">Change</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <motion.tr
                  key={entry.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`
                    border-t border-white/10 hover:bg-white/5 transition-colors
                    ${entry.name === user?.name ? 'bg-[#3b82f6]/10' : ''}
                  `}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {entry.rank === 1 && <Crown className="w-5 h-5 text-[#f59e0b]" />}
                      {entry.rank === 2 && <Medal className="w-5 h-5 text-gray-400" />}
                      {entry.rank === 3 && <Medal className="w-5 h-5 text-[#cd7f32]" />}
                      <span className="text-white">#{entry.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={entry.avatar}
                        alt={entry.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="text-white">{entry.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white">{entry.level}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white">{entry.xp.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-white">{entry.streak}</span>
                      <span className="text-[#f59e0b]">🔥</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {entry.change > 0 ? (
                      <span className="text-[#10b981]">↑ {entry.change}</span>
                    ) : entry.change < 0 ? (
                      <span className="text-[#ef4444]">↓ {Math.abs(entry.change)}</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
