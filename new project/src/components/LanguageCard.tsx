import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface LanguageCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  progress: number;
  lessons: number;
  onClick: () => void;
}

export function LanguageCard({ name, icon: Icon, color, progress, lessons, onClick }: LanguageCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="glass-card p-6 cursor-pointer group hover:shadow-hover transition-all duration-300"
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:animate-float`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h4 className="mb-2">{name}</h4>
      <p className="text-sm opacity-70 mb-4">{lessons} lessons</p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="opacity-70">Progress</span>
          <span className={`font-mono ${progress === 100 ? 'text-emerald-400' : ''}`}>{progress}%</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-full bg-gradient-to-r ${color}`}
          />
        </div>
      </div>
    </motion.div>
  );
}
