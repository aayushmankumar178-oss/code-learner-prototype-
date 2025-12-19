import { motion } from 'motion/react';
import { Play, CheckCircle, Lock, Download, Video, FileText, Code } from 'lucide-react';

interface LanguageDetailProps {
  language: string;
  onNavigate: (screen: string) => void;
}

export function LanguageDetail({ language, onNavigate }: LanguageDetailProps) {
  const roadmap = [
    { id: 1, title: 'Introduction & Setup', lessons: 5, duration: '45 min', completed: true, locked: false },
    { id: 2, title: 'Basic Syntax', lessons: 12, duration: '2 hours', completed: true, locked: false },
    { id: 3, title: 'Variables & Data Types', lessons: 8, duration: '1.5 hours', completed: true, locked: false },
    { id: 4, title: 'Control Flow', lessons: 10, duration: '2 hours', completed: false, locked: false },
    { id: 5, title: 'Functions & Scope', lessons: 15, duration: '3 hours', completed: false, locked: false },
    { id: 6, title: 'Arrays & Objects', lessons: 12, duration: '2.5 hours', completed: false, locked: true },
    { id: 7, title: 'ES6+ Features', lessons: 18, duration: '3.5 hours', completed: false, locked: true },
    { id: 8, title: 'Async Programming', lessons: 14, duration: '3 hours', completed: false, locked: true },
  ];

  const resources = [
    { type: 'video', title: 'Complete Tutorial Series', count: 45, icon: Video },
    { type: 'pdf', title: 'Downloadable Notes', count: 12, icon: FileText },
    { type: 'practice', title: 'Coding Challenges', count: 100, icon: Code },
  ];

  const stats = [
    { label: 'Progress', value: '35%' },
    { label: 'Completed', value: '28/80' },
    { label: 'Time Spent', value: '12h' },
    { label: 'Rank', value: '#142' },
  ];

  return (
    <div className="p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="glass-card p-8 mb-8 bg-gradient-to-r from-yellow-500/10 to-amber-600/10 border border-yellow-500/30">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-4xl">
              JS
            </div>
            
            <div className="flex-1">
              <h2 className="mb-2">JavaScript Mastery</h2>
              <p className="opacity-70 mb-4">
                Master modern JavaScript from basics to advanced concepts including ES6+, async programming, and more.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('quiz')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Continue Learning
                </button>
                <button
                  onClick={() => onNavigate('notes')}
                  className="px-6 py-3 rounded-xl glass-card border border-white/20 hover:border-yellow-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Notes
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-1">{stat.value}</div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 text-center hover:shadow-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h5 className="mb-2">{resource.title}</h5>
                <p className="text-sm opacity-70">{resource.count} resources available</p>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6"
        >
          <h4 className="mb-6">Learning Roadmap</h4>
          
          <div className="space-y-3">
            {roadmap.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  module.locked
                    ? 'border-white/10 bg-white/5 opacity-50 cursor-not-allowed'
                    : module.completed
                    ? 'border-emerald-500/50 bg-emerald-500/10 cursor-pointer hover:bg-emerald-500/20'
                    : 'border-blue-500/50 bg-blue-500/10 cursor-pointer hover:bg-blue-500/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    module.locked
                      ? 'bg-white/10'
                      : module.completed
                      ? 'bg-emerald-500'
                      : 'bg-blue-500'
                  }`}>
                    {module.locked ? (
                      <Lock className="w-5 h-5" />
                    ) : module.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h6 className="mb-1">{module.title}</h6>
                    <div className="flex items-center gap-4 text-sm opacity-70">
                      <span>{module.lessons} lessons</span>
                      <span>•</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>

                  {module.completed && (
                    <div className="text-emerald-400 text-sm">Completed</div>
                  )}
                  {!module.locked && !module.completed && (
                    <button
                      onClick={() => onNavigate('quiz')}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all text-sm"
                    >
                      Start
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificate Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 glass-card p-6 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="mb-1">Earn Your Certificate</h5>
              <p className="text-sm opacity-70">Complete all modules to earn your JavaScript Mastery certificate</p>
            </div>
            <div className="text-right">
              <div className="text-3xl mb-1">35%</div>
              <div className="text-sm opacity-70">Complete</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
