import { Link } from 'react-router-dom';
import { Star, Users, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { languages } from '../data/languages';
import GlassCard from '../components/ui/GlassCard';
import ProgressCircle from '../components/ui/ProgressCircle';

export default function LanguageHub() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-5xl mb-4"
        >
          Language Hub
        </motion.h1>
        <p className="text-gray-400 text-lg">
          Choose your path and start mastering programming
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link to={`/app/language/${lang.id}`}>
              <GlassCard className="p-6 h-full" glow>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="text-5xl w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${lang.color}, ${lang.color}99)` }}
                  >
                    {lang.icon}
                  </div>
                  <ProgressCircle
                    progress={lang.progress}
                    size={60}
                    strokeWidth={6}
                    color={lang.color}
                  />
                </div>

                <h3 className="text-white text-2xl mb-2">{lang.name}</h3>
                <p className="text-gray-400 mb-4">{lang.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${lang.color}20`, color: lang.color }}
                  >
                    {lang.difficulty}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{lang.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Star className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                    <span>{lang.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{(lang.enrolled / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{lang.lessons} lessons</span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
