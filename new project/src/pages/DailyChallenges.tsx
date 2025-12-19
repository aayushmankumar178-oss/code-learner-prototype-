import { useState } from 'react';
import { Flame, Trophy, Clock, CheckCircle2, Lock, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import confetti from 'canvas-confetti';

const challenges = [
  {
    id: 1,
    day: 'Monday',
    date: 'Dec 16',
    title: 'Array Manipulation',
    description: 'Reverse an array without using built-in methods',
    difficulty: 'Easy',
    xp: 50,
    time: '15 min',
    completed: true,
  },
  {
    id: 2,
    day: 'Tuesday',
    date: 'Dec 17',
    title: 'String Palindrome',
    description: 'Check if a string is a palindrome',
    difficulty: 'Easy',
    xp: 50,
    time: '10 min',
    completed: true,
  },
  {
    id: 3,
    day: 'Wednesday',
    date: 'Dec 18',
    title: 'FizzBuzz Challenge',
    description: 'Classic FizzBuzz problem with a twist',
    difficulty: 'Medium',
    xp: 100,
    time: '20 min',
    completed: true,
  },
  {
    id: 4,
    day: 'Thursday',
    date: 'Dec 19',
    title: 'Binary Search',
    description: 'Implement binary search algorithm',
    difficulty: 'Medium',
    xp: 100,
    time: '25 min',
    completed: false,
    current: true,
  },
  {
    id: 5,
    day: 'Friday',
    date: 'Dec 20',
    title: 'Linked List',
    description: 'Reverse a singly linked list',
    difficulty: 'Hard',
    xp: 150,
    time: '30 min',
    completed: false,
    locked: true,
  },
  {
    id: 6,
    day: 'Saturday',
    date: 'Dec 21',
    title: 'Tree Traversal',
    description: 'Implement in-order tree traversal',
    difficulty: 'Hard',
    xp: 150,
    time: '35 min',
    completed: false,
    locked: true,
  },
  {
    id: 7,
    day: 'Sunday',
    date: 'Dec 22',
    title: 'Dynamic Programming',
    description: 'Solve the coin change problem',
    difficulty: 'Expert',
    xp: 200,
    time: '45 min',
    completed: false,
    locked: true,
  },
];

const difficultyColors = {
  Easy: '#10b981',
  Medium: '#f59e0b',
  Hard: '#ef4444',
  Expert: '#8b5cf6',
};

export default function DailyChallenges() {
  const { user } = useAuth();
  const [selectedChallenge, setSelectedChallenge] = useState(challenges.find(c => c.current) || challenges[0]);

  const completedCount = challenges.filter(c => c.completed).length;
  const currentStreak = user?.streak || 0;

  const handleComplete = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Daily Challenges</h1>
        <p className="text-gray-400 text-lg">
          Complete daily coding challenges to maintain your streak
        </p>
      </motion.div>

      {/* Streak Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <GlassCard className="p-6" glow>
          <Flame className="w-8 h-8 text-[#ef4444] mb-3" />
          <div className="text-white text-4xl mb-1">{currentStreak}</div>
          <p className="text-gray-400">Day Streak</p>
        </GlassCard>
        <GlassCard className="p-6" glow>
          <CheckCircle2 className="w-8 h-8 text-[#10b981] mb-3" />
          <div className="text-white text-4xl mb-1">{completedCount}</div>
          <p className="text-gray-400">Completed</p>
        </GlassCard>
        <GlassCard className="p-6" glow>
          <Trophy className="w-8 h-8 text-[#f59e0b] mb-3" />
          <div className="text-white text-4xl mb-1">{completedCount * 50}</div>
          <p className="text-gray-400">XP Earned</p>
        </GlassCard>
        <GlassCard className="p-6" glow>
          <Star className="w-8 h-8 text-[#3b82f6] mb-3" />
          <div className="text-white text-4xl mb-1">12</div>
          <p className="text-gray-400">Perfect Weeks</p>
        </GlassCard>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Challenge List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-white text-2xl mb-4">This Week</h2>
          {challenges.map((challenge, index) => (
            <motion.button
              key={challenge.id}
              onClick={() => !challenge.locked && setSelectedChallenge(challenge)}
              disabled={challenge.locked}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full text-left"
            >
              <GlassCard
                className={`p-4 ${
                  selectedChallenge.id === challenge.id ? 'ring-2 ring-[#10b981]' : ''
                } ${challenge.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                hover={!challenge.locked}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${challenge.completed
                      ? 'bg-[#10b981] text-white'
                      : challenge.current
                      ? 'bg-[#3b82f6] text-white'
                      : 'bg-white/10 text-gray-400'
                    }
                  `}>
                    {challenge.completed ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : challenge.locked ? (
                      <Lock className="w-6 h-6" />
                    ) : (
                      <Zap className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400 text-sm">{challenge.day}</span>
                      <span className="text-gray-400 text-xs">{challenge.date}</span>
                    </div>
                    <h3 className="text-white mb-1">{challenge.title}</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: `${difficultyColors[challenge.difficulty as keyof typeof difficultyColors]}20`,
                          color: difficultyColors[challenge.difficulty as keyof typeof difficultyColors]
                        }}
                      >
                        {challenge.difficulty}
                      </span>
                      <span className="text-gray-400 text-xs">+{challenge.xp} XP</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.button>
          ))}
        </div>

        {/* Challenge Detail */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-8" glow>
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="px-3 py-1 rounded-lg text-sm"
                    style={{
                      backgroundColor: `${difficultyColors[selectedChallenge.difficulty as keyof typeof difficultyColors]}20`,
                      color: difficultyColors[selectedChallenge.difficulty as keyof typeof difficultyColors]
                    }}
                  >
                    {selectedChallenge.difficulty}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{selectedChallenge.time}</span>
                  </div>
                </div>
                <h2 className="text-white text-3xl mb-2">{selectedChallenge.title}</h2>
                <p className="text-gray-300">{selectedChallenge.description}</p>
              </div>
              {selectedChallenge.completed && (
                <div className="flex items-center gap-2 text-[#10b981]">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Completed</span>
                </div>
              )}
            </div>

            <div className="bg-[#0f0f23] rounded-lg p-6 mb-6">
              <h3 className="text-white mb-4">Challenge Description</h3>
              <p className="text-gray-300 mb-4">
                Write a function that {selectedChallenge.description.toLowerCase()}. 
                Your solution should be efficient and handle edge cases.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Requirements:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Implement the solution in your preferred language</li>
                  <li>Handle edge cases appropriately</li>
                  <li>Optimize for time complexity</li>
                  <li>Include comments explaining your logic</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0f0f23] rounded-lg p-4 mb-6">
              <h3 className="text-white mb-3">Example:</h3>
              <pre className="text-gray-300 font-mono text-sm">
{`Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]`}
              </pre>
            </div>

            <div className="flex gap-4">
              {!selectedChallenge.completed && !selectedChallenge.locked && (
                <>
                  <GradientButton onClick={handleComplete} variant="success">
                    Submit Solution
                  </GradientButton>
                  <GradientButton variant="secondary">
                    View Hints
                  </GradientButton>
                </>
              )}
              {selectedChallenge.completed && (
                <GradientButton variant="secondary">
                  View Your Solution
                </GradientButton>
              )}
              {selectedChallenge.locked && (
                <div className="text-gray-400 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Complete previous challenges to unlock
                </div>
              )}
            </div>
          </GlassCard>

          {/* Rewards */}
          <GlassCard className="p-6">
            <h3 className="text-white text-xl mb-4">Challenge Rewards</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-[#10b981]" />
                </div>
                <p className="text-white mb-1">+{selectedChallenge.xp} XP</p>
                <p className="text-gray-400 text-xs">Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                  <Star className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <p className="text-white mb-1">+1 Point</p>
                <p className="text-gray-400 text-xs">Streak</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                  <Flame className="w-8 h-8 text-[#ef4444]" />
                </div>
                <p className="text-white mb-1">Badge</p>
                <p className="text-gray-400 text-xs">Achievement</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
