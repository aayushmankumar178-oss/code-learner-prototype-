import { useParams, Link } from 'react-router-dom';
import { Play, FileText, Code, Award, Clock, Users, Star, CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { languages } from '../data/languages';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import ProgressCircle from '../components/ui/ProgressCircle';

const roadmap = [
  { title: 'Introduction & Setup', lessons: 5, duration: '2h', completed: true },
  { title: 'Fundamentals', lessons: 12, duration: '8h', completed: true },
  { title: 'Intermediate Concepts', lessons: 15, duration: '12h', completed: false, current: true },
  { title: 'Advanced Topics', lessons: 18, duration: '15h', completed: false },
  { title: 'Real-World Projects', lessons: 10, duration: '20h', completed: false },
  { title: 'Final Assessment', lessons: 4, duration: '3h', completed: false },
];

const resources = [
  { type: 'Video', title: 'Getting Started Tutorial', duration: '15 min', icon: Play },
  { type: 'Article', title: 'Best Practices Guide', duration: '10 min read', icon: FileText },
  { type: 'Exercise', title: 'Hands-on Practice', duration: '30 min', icon: Code },
  { type: 'Quiz', title: 'Knowledge Check', duration: '20 min', icon: Award },
];

export default function LanguageDetail() {
  const { id } = useParams();
  const language = languages.find(l => l.id === id);

  if (!language) {
    return <div className="text-white">Language not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <GlassCard className="p-8" glow>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div
            className="text-7xl w-24 h-24 rounded-3xl flex items-center justify-center"
            style={{ backgroundColor: `${language.color}20` }}
          >
            {language.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-white text-5xl mb-4">{language.name}</h1>
            <p className="text-gray-300 text-xl mb-6">{language.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>{language.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>{language.enrolled.toLocaleString()} enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Star className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
                <span>{language.rating} rating</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to={`/app/quiz/${language.id}`}>
                <GradientButton variant="success">Continue Learning</GradientButton>
              </Link>
              <GradientButton variant="secondary">Download Resources</GradientButton>
            </div>
          </div>
          <ProgressCircle progress={language.progress} size={140} color={language.color} />
        </div>
      </GlassCard>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Roadmap */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-white text-3xl mb-4">Learning Roadmap</h2>
          {roadmap.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className={`p-6 ${module.current ? 'ring-2 ring-[#10b981]' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    module.completed
                      ? 'bg-[#10b981] text-white'
                      : module.current
                      ? 'bg-[#3b82f6] text-white'
                      : 'bg-white/10 text-gray-400'
                  }`}>
                    {module.completed ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : module.current ? (
                      <Play className="w-6 h-6" />
                    ) : (
                      <Lock className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl mb-2">{module.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <span>{module.lessons} lessons</span>
                      <span>•</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  {module.current && (
                    <Link to={`/app/quiz/${language.id}`}>
                      <GradientButton size="sm">Start</GradientButton>
                    </Link>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Resources Sidebar */}
        <div className="space-y-6">
          <div>
            <h2 className="text-white text-3xl mb-4">Quick Resources</h2>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <GlassCard key={index} className="p-4 cursor-pointer" hover>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="text-white text-sm">{resource.title}</p>
                      <p className="text-gray-400 text-xs">{resource.duration}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Stats */}
          <GlassCard className="p-6">
            <h3 className="text-white text-xl mb-4">Your Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Lessons Completed</span>
                  <span className="text-white">32/{language.lessons}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(32 / language.lessons) * 100}%`,
                      backgroundColor: language.color
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Quizzes Passed</span>
                  <span className="text-white">18/24</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#10b981] rounded-full"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Projects</span>
                  <span className="text-white">4/8</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#f59e0b] rounded-full"
                    style={{ width: '50%' }}
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
