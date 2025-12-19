import { Link } from 'react-router-dom';
import { ArrowRight, Code, Sparkles, Users, Award, Star, Play } from 'lucide-react';
import { motion } from 'motion/react';
import GradientButton from '../components/ui/GradientButton';
import GlassCard from '../components/ui/GlassCard';

const features = [
  { icon: Code, text: '100% Free Forever', color: '#10b981' },
  { icon: Users, text: '50K+ Active Learners', color: '#3b82f6' },
  { icon: Award, text: 'Industry Certificates', color: '#f59e0b' },
  { icon: Sparkles, text: 'AI-Powered Learning', color: '#ec4899' },
];

const languages = [
  { name: 'Python', icon: '🐍', color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-600' },
  { name: 'C++', icon: '⚙️', color: 'from-purple-500 to-pink-600' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-600' },
];

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1e3a8a] to-[#0f0f23] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#10b981]/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#10b981] flex items-center justify-center">
              <Code className="w-7 h-7 text-white" />
            </div>
            <span className="text-white text-xl tracking-tight">CodeMaster Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/app/hub" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link to="/app/hub" className="text-gray-300 hover:text-white transition-colors">
              Courses
            </Link>
            <Link to="/app/community" className="text-gray-300 hover:text-white transition-colors">
              Community
            </Link>
            <Link to="/app/hub">
              <GradientButton size="sm">Get Started</GradientButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-gray-300 text-sm">Trusted by 50,000+ developers worldwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-6xl sm:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            Master Coding,
            <br />
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#f59e0b] bg-clip-text text-transparent">
              Transform Your Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto mb-12"
          >
            Learn 12+ programming languages with interactive courses, AI-powered quizzes,
            and real-world projects. 100% free, forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link to="/onboarding">
              <GradientButton size="lg" variant="success">
                Start Learning Free <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GradientButton>
            </Link>
            <GradientButton size="lg" variant="secondary">
              <Play className="w-5 h-5 mr-2 inline" /> Watch Demo
            </GradientButton>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-20"
          >
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-4 h-4" style={{ color: feature.color }} />
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Language Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-white text-3xl text-center mb-8">Featured Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              >
                <Link to="/app/hub">
                  <GlassCard className="p-6 text-center group">
                    <div className={`text-4xl mb-3 transform group-hover:scale-110 transition-transform`}>
                      {lang.icon}
                    </div>
                    <p className="text-white">{lang.name}</p>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <GlassCard className="p-8 text-center" glow>
            <div className="text-5xl mb-3">🎓</div>
            <div className="text-white text-4xl mb-2">500+</div>
            <p className="text-gray-400">Interactive Lessons</p>
          </GlassCard>
          <GlassCard className="p-8 text-center" glow>
            <div className="text-5xl mb-3">⭐</div>
            <div className="text-white text-4xl mb-2">4.9/5</div>
            <p className="text-gray-400">Average Rating</p>
          </GlassCard>
          <GlassCard className="p-8 text-center" glow>
            <div className="text-5xl mb-3">🏆</div>
            <div className="text-white text-4xl mb-2">50K+</div>
            <p className="text-gray-400">Certificates Issued</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
