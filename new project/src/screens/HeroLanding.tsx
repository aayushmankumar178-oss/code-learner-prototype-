import { motion } from 'motion/react';
import { ArrowRight, Star, Users, BookOpen, Trophy, Play, Code2, Zap } from 'lucide-react';

interface HeroLandingProps {
  onNavigate: (screen: string) => void;
}

export function HeroLanding({ onNavigate }: HeroLandingProps) {
  const featuredLanguages = [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Java', color: 'bg-red-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'C++', color: 'bg-purple-500' },
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Learners' },
    { icon: BookOpen, value: '1000+', label: 'Free Resources' },
    { icon: Trophy, value: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1e3a8a] to-[#0f0f23]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm">Trusted by 50,000+ developers worldwide</span>
          </div>

          <h1 className="mb-6 max-w-4xl mx-auto">
            Master Coding with{' '}
            <span className="gradient-text">AI-Powered</span>
            <br />
            Learning Platform
          </h1>

          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Learn HTML, CSS, JavaScript, Python, React and more. Interactive courses, 
            real-world projects, and a supportive community—all 100% free.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('onboarding')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 group"
            >
              Start Learning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('languages')}
              className="px-8 py-4 rounded-xl glass-card border border-white/20 hover:border-blue-400 transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Explore Courses
            </motion.button>
          </div>

          {/* Featured Languages */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {featuredLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full glass-card border border-white/10 hover:border-blue-400 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${lang.color}`} />
                  <span className="text-sm">{lang.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="glass-card p-6 text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-3xl mb-1 gradient-text">{stat.value}</div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Code2, title: 'Interactive Coding', desc: 'Practice with live code editor' },
            { icon: BookOpen, title: 'Free Resources', desc: 'Download PDFs & cheat sheets' },
            { icon: Zap, title: 'Daily Challenges', desc: 'Build your coding streak' },
            { icon: Trophy, title: 'Earn Certificates', desc: 'Showcase your achievements' },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center group hover:shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h5 className="mb-2">{feature.title}</h5>
                <p className="text-sm opacity-70">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm opacity-60 mb-4">Powered by top educational resources</p>
          <div className="flex flex-wrap gap-6 justify-center opacity-50">
            <span className="text-sm">freeCodeCamp</span>
            <span className="text-sm">W3Schools</span>
            <span className="text-sm">Codecademy</span>
            <span className="text-sm">GitHub Education</span>
            <span className="text-sm">MDN Web Docs</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
