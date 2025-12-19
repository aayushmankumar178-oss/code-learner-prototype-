import { Code2, Database, Globe, Cpu, GitBranch, Box, Layers, Terminal } from 'lucide-react';
import { LanguageCard } from '../components/LanguageCard';
import { motion } from 'motion/react';

interface LanguageHubProps {
  onNavigate: (screen: string, language?: string) => void;
}

export function LanguageHub({ onNavigate }: LanguageHubProps) {
  const languages = [
    { id: 'html', name: 'HTML/CSS', icon: Globe, color: 'from-orange-500 to-red-500', progress: 75, lessons: 45 },
    { id: 'javascript', name: 'JavaScript', icon: Code2, color: 'from-yellow-500 to-amber-600', progress: 60, lessons: 120 },
    { id: 'python', name: 'Python', icon: Terminal, color: 'from-blue-500 to-cyan-500', progress: 45, lessons: 95 },
    { id: 'java', name: 'Java', icon: Cpu, color: 'from-red-500 to-pink-500', progress: 30, lessons: 85 },
    { id: 'cpp', name: 'C++', icon: Box, color: 'from-purple-500 to-indigo-600', progress: 20, lessons: 78 },
    { id: 'react', name: 'React', icon: Layers, color: 'from-cyan-500 to-blue-500', progress: 55, lessons: 68 },
    { id: 'nodejs', name: 'Node.js', icon: Terminal, color: 'from-green-500 to-emerald-600', progress: 40, lessons: 52 },
    { id: 'sql', name: 'SQL', icon: Database, color: 'from-indigo-500 to-purple-600', progress: 35, lessons: 42 },
    { id: 'typescript', name: 'TypeScript', icon: Code2, color: 'from-blue-600 to-indigo-700', progress: 25, lessons: 56 },
    { id: 'dsa', name: 'Data Structures', icon: Layers, color: 'from-pink-500 to-rose-600', progress: 50, lessons: 110 },
    { id: 'algorithms', name: 'Algorithms', icon: Cpu, color: 'from-violet-500 to-purple-600', progress: 45, lessons: 95 },
    { id: 'git', name: 'Git & GitHub', icon: GitBranch, color: 'from-gray-700 to-gray-900', progress: 80, lessons: 35 },
  ];

  const categories = [
    { name: 'All', count: 12, active: true },
    { name: 'Frontend', count: 4 },
    { name: 'Backend', count: 3 },
    { name: 'Algorithms', count: 2 },
    { name: 'Tools', count: 3 },
  ];

  return (
    <div className="p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2">Choose Your Path</h2>
          <p className="opacity-70">Select a language to start your coding journey</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search languages..."
              className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-blue-400 outline-none transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  category.active
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'glass-card hover:bg-white/5'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <LanguageCard
                {...language}
                onClick={() => onNavigate('language-detail', language.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-card p-8 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30"
        >
          <h3 className="mb-3">Not sure where to start?</h3>
          <p className="opacity-70 mb-6">Take our quick quiz to find the perfect learning path for you</p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
            Take Career Quiz
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
