import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle2, XCircle, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import confetti from 'canvas-confetti';

const quizQuestions = [
  {
    question: 'What is the correct syntax to output "Hello World" in Python?',
    options: [
      'echo "Hello World"',
      'print("Hello World")',
      'console.log("Hello World")',
      'printf("Hello World")'
    ],
    correct: 1
  },
  {
    question: 'Which data type is used to store True or False values?',
    options: ['String', 'Integer', 'Boolean', 'Float'],
    correct: 2
  },
  {
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets'
    ],
    correct: 2
  },
  {
    question: 'Which symbol is used for single-line comments in JavaScript?',
    options: ['//', '#', '/*', '--'],
    correct: 0
  },
  {
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correct: 1
  }
];

export default function Quiz() {
  const { language } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    if (quizComplete) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setQuizComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quizComplete]);

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setShowFeedback(true);

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
      const score = answers.filter((a, i) => a === quizQuestions[i].correct).length;
      if (score >= quizQuestions.length * 0.7) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const score = answers.filter((a, i) => a === quizQuestions[i].correct).length;
  const percentage = Math.round((score / quizQuestions.length) * 100);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (quizComplete) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <GlassCard className="p-12 text-center" glow>
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-white text-5xl mb-4">Quiz Complete!</h1>
            <p className="text-gray-300 text-2xl mb-8">
              You scored {score} out of {quizQuestions.length}
            </p>
            
            <div className="mb-8">
              <div className="text-6xl mb-4 text-white">{percentage}%</div>
              <div className="max-w-md mx-auto h-4 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    percentage >= 70 ? 'bg-[#10b981]' : percentage >= 50 ? 'bg-[#f59e0b]' : 'bg-[#ef4444]'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <GradientButton onClick={() => window.location.reload()} variant="secondary">
                Retake Quiz
              </GradientButton>
              <GradientButton onClick={() => navigate(`/app/language/${language}`)}>
                Back to Course
              </GradientButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Timer & Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#3b82f6]" />
            <span className="text-white text-2xl">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-400">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3b82f6] to-[#10b981]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <GlassCard className="p-8 mb-6" glow>
            <h2 className="text-white text-2xl mb-8">{question.question}</h2>
            
            <div className="space-y-4">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const showCorrect = showFeedback && index === question.correct;
                const showWrong = showFeedback && isSelected && !isCorrect;

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`
                      w-full p-5 rounded-xl text-left transition-all
                      ${isSelected && !showFeedback
                        ? 'bg-[#3b82f6]/20 border-2 border-[#3b82f6]'
                        : 'bg-white/5 border-2 border-white/10 hover:border-white/30'
                      }
                      ${showCorrect ? 'bg-[#10b981]/20 border-2 border-[#10b981]' : ''}
                      ${showWrong ? 'bg-[#ef4444]/20 border-2 border-[#ef4444]' : ''}
                      ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                    whileHover={!showFeedback ? { scale: 1.02 } : {}}
                    whileTap={!showFeedback ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg">{option}</span>
                      {showCorrect && <CheckCircle2 className="w-6 h-6 text-[#10b981]" />}
                      {showWrong && <XCircle className="w-6 h-6 text-[#ef4444]" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-lg ${
                  isCorrect ? 'bg-[#10b981]/20 border border-[#10b981]' : 'bg-[#ef4444]/20 border border-[#ef4444]'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-[#10b981]" />
                  ) : (
                    <XCircle className="w-6 h-6 text-[#ef4444]" />
                  )}
                  <span className={isCorrect ? 'text-[#10b981]' : 'text-[#ef4444]'}>
                    {isCorrect ? 'Correct! Well done!' : 'Incorrect. The correct answer is highlighted above.'}
                  </span>
                </div>
              </motion.div>
            )}
          </GlassCard>

          <div className="flex justify-end gap-4">
            {!showFeedback ? (
              <GradientButton
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                variant="success"
              >
                Submit Answer
              </GradientButton>
            ) : (
              <GradientButton onClick={handleNext}>
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GradientButton>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
