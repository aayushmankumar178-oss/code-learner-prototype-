import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Code, Target, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useOnboarding } from '../contexts/OnboardingContext';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const steps = [
  {
    title: 'Welcome to CodeMaster Pro',
    subtitle: 'Your journey to becoming a master developer starts here',
    icon: Rocket,
    content: (
      <div className="text-center">
        <div className="text-7xl mb-6">🚀</div>
        <h2 className="text-white text-4xl mb-4">Let\'s Get Started!</h2>
        <p className="text-gray-300 text-lg mb-8">
          CodeMaster Pro offers 12+ programming languages, interactive quizzes,
          live code playgrounds, and a supportive community to help you succeed.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-white mb-2">500+ Lessons</h3>
            <p className="text-gray-400 text-sm">Comprehensive courses</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-white mb-2">Live Coding</h3>
            <p className="text-gray-400 text-sm">Interactive playground</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-white mb-2">Achievements</h3>
            <p className="text-gray-400 text-sm">Track your progress</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choose Your Learning Goals',
    subtitle: 'What do you want to achieve?',
    icon: Target,
    content: <GoalsSelection />,
  },
  {
    title: 'Pick Your Starting Languages',
    subtitle: 'Select languages you want to learn (you can add more later)',
    icon: Code,
    content: <LanguageSelection />,
  },
];

function GoalsSelection() {
  const [selected, setSelected] = useState<string[]>([]);

  const goals = [
    { id: 'career', title: 'Career Change', icon: '💼', desc: 'Transition into tech' },
    { id: 'improve', title: 'Improve Skills', icon: '📈', desc: 'Level up existing knowledge' },
    { id: 'project', title: 'Build Projects', icon: '🛠️', desc: 'Create real applications' },
    { id: 'interview', title: 'Interview Prep', icon: '🎯', desc: 'Ace technical interviews' },
    { id: 'hobby', title: 'Personal Interest', icon: '✨', desc: 'Learn for fun' },
    { id: 'freelance', title: 'Freelancing', icon: '💰', desc: 'Start freelance work' },
  ];

  const toggleGoal = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {goals.map(goal => (
        <button
          key={goal.id}
          onClick={() => toggleGoal(goal.id)}
          className={`
            p-6 rounded-xl text-left transition-all
            ${selected.includes(goal.id)
              ? 'bg-gradient-to-br from-[#3b82f6]/20 to-[#10b981]/20 border-2 border-[#10b981]'
              : 'bg-white/5 border-2 border-white/10 hover:border-white/30'
            }
          `}
        >
          {selected.includes(goal.id) && (
            <div className="flex justify-end mb-2">
              <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
          <div className="text-4xl mb-3">{goal.icon}</div>
          <h3 className="text-white mb-1">{goal.title}</h3>
          <p className="text-gray-400 text-sm">{goal.desc}</p>
        </button>
      ))}
    </div>
  );
}

function LanguageSelection() {
  const [selected, setSelected] = useState<string[]>([]);

  const languages = [
    { id: 'html', name: 'HTML/CSS', icon: '🎨', color: '#f59e0b' },
    { id: 'js', name: 'JavaScript', icon: '⚡', color: '#eab308' },
    { id: 'python', name: 'Python', icon: '🐍', color: '#3b82f6' },
    { id: 'java', name: 'Java', icon: '☕', color: '#ef4444' },
    { id: 'react', name: 'React', icon: '⚛️', color: '#06b6d4' },
    { id: 'node', name: 'Node.js', icon: '🟢', color: '#10b981' },
  ];

  const toggleLanguage = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {languages.map(lang => (
        <button
          key={lang.id}
          onClick={() => toggleLanguage(lang.id)}
          className={`
            p-6 rounded-xl text-center transition-all
            ${selected.includes(lang.id)
              ? 'bg-gradient-to-br from-[#3b82f6]/20 to-[#10b981]/20 border-2 border-[#10b981] scale-105'
              : 'bg-white/5 border-2 border-white/10 hover:border-white/30'
            }
          `}
        >
          {selected.includes(lang.id) && (
            <div className="flex justify-end mb-2">
              <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
          <div className="text-5xl mb-3">{lang.icon}</div>
          <h3 className="text-white">{lang.name}</h3>
        </button>
      ))}
    </div>
  );
}

export default function Onboarding() {
  const navigate = useNavigate();
  const { completeOnboarding } = useOnboarding();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeOnboarding();
      navigate('/app/hub');
    }
  };

  const handleSkip = () => {
    completeOnboarding();
    navigate('/app/hub');
  };

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1e3a8a] to-[#0f0f23] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#10b981]/20 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#10b981] flex items-center justify-center">
            <Code className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xl tracking-tight">CodeMaster Pro</span>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all
                ${index === currentStep
                  ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] scale-110'
                  : index < currentStep
                  ? 'bg-[#10b981]'
                  : 'bg-white/10'
                }
              `}>
                {index < currentStep ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span className="text-white">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-24 h-1 mx-2 ${index < currentStep ? 'bg-[#10b981]' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-12" glow>
              <div className="text-center mb-8">
                <h1 className="text-white text-4xl mb-2">{step.title}</h1>
                <p className="text-gray-400 text-lg">{step.subtitle}</p>
              </div>

              <div className="mb-12">
                {step.content}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleSkip}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skip for now
                </button>
                <div className="flex gap-4">
                  {currentStep > 0 && (
                    <button
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <GradientButton onClick={handleNext} variant="success" size="lg">
                    {currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </GradientButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
