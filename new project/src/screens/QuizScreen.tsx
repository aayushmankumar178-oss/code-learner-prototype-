import { useState } from 'react';
import { QuizCard } from '../components/QuizCard';
import { motion } from 'motion/react';
import { Trophy, Star, RotateCcw } from 'lucide-react';

interface QuizScreenProps {
  onNavigate: (screen: string) => void;
}

export function QuizScreen({ onNavigate }: QuizScreenProps) {
  const [quizComplete, setQuizComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: 'What is the correct way to declare a variable in JavaScript?',
      options: [
        'variable x = 5',
        'let x = 5',
        'v x = 5',
        'dim x = 5'
      ],
      correctAnswer: 1,
      explanation: 'In modern JavaScript, we use "let" or "const" to declare variables. "let" is used for values that might change.'
    },
    {
      id: 2,
      question: 'Which symbol is used for single-line comments in JavaScript?',
      options: [
        '<!-- -->',
        '/* */',
        '//',
        '#'
      ],
      correctAnswer: 2,
      explanation: 'Single-line comments in JavaScript start with //. Multi-line comments use /* */.'
    },
    {
      id: 3,
      question: 'What does "===" mean in JavaScript?',
      options: [
        'Assignment operator',
        'Strict equality (checks value and type)',
        'Loose equality (checks only value)',
        'Not equal'
      ],
      correctAnswer: 1,
      explanation: '=== is the strict equality operator that checks both value and type, while == only checks value.'
    },
    {
      id: 4,
      question: 'What is the result of: typeof null',
      options: [
        '"null"',
        '"undefined"',
        '"object"',
        '"number"'
      ],
      correctAnswer: 2,
      explanation: 'This is a well-known JavaScript quirk. typeof null returns "object", which is actually a bug that has been kept for backward compatibility.'
    },
    {
      id: 5,
      question: 'Which method is used to add an element to the end of an array?',
      options: [
        'array.add()',
        'array.append()',
        'array.push()',
        'array.insert()'
      ],
      correctAnswer: 2,
      explanation: 'The push() method adds one or more elements to the end of an array and returns the new length.'
    }
  ];

  const handleComplete = (score: number) => {
    setFinalScore(score);
    setQuizComplete(true);
  };

  const handleRetry = () => {
    setQuizComplete(false);
    setFinalScore(0);
  };

  if (quizComplete) {
    const percentage = (finalScore / questions.length) * 100;
    const passed = percentage >= 70;

    return (
      <div className="p-6 lg:p-8 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 max-w-2xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center ${
              passed
                ? 'bg-gradient-to-br from-emerald-500 to-cyan-500'
                : 'bg-gradient-to-br from-amber-500 to-orange-500'
            }`}
          >
            <Trophy className="w-16 h-16 text-white" />
          </motion.div>

          <h2 className="mb-4">
            {passed ? 'Congratulations! 🎉' : 'Good Try! 💪'}
          </h2>
          
          <p className="text-xl opacity-70 mb-8">
            You scored {finalScore} out of {questions.length} ({percentage.toFixed(0)}%)
          </p>

          {/* Score Breakdown */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="glass-card p-4">
              <div className="text-3xl text-emerald-400 mb-1">{finalScore}</div>
              <div className="text-sm opacity-70">Correct</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-3xl text-red-400 mb-1">{questions.length - finalScore}</div>
              <div className="text-sm opacity-70">Incorrect</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-3xl text-amber-400 mb-1">+{finalScore * 20}</div>
              <div className="text-sm opacity-70">XP Earned</div>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 ${
                  star <= (percentage / 20) ? 'text-amber-400 fill-amber-400' : 'text-white/20'
                }`}
              />
            ))}
          </div>

          {passed && (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 mb-6">
              <p className="text-sm">
                🏆 Achievement Unlocked: JavaScript Fundamentals Master
              </p>
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="px-6 py-3 rounded-xl glass-card border border-white/20 hover:border-blue-400 transition-all duration-300 flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Back to Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="mb-2">JavaScript Basics Quiz</h2>
          <p className="opacity-70">Test your knowledge and earn XP!</p>
        </motion.div>

        <QuizCard questions={questions} onComplete={handleComplete} />
      </div>
    </div>
  );
}
