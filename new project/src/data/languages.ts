export interface Language {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  enrolled: number;
  rating: number;
  progress: number;
}

export const languages: Language[] = [
  {
    id: 'html-css',
    name: 'HTML & CSS',
    icon: '🎨',
    color: '#f59e0b',
    gradient: 'from-orange-500 to-pink-500',
    description: 'Master web design fundamentals',
    difficulty: 'Beginner',
    duration: '4 weeks',
    lessons: 42,
    enrolled: 18500,
    rating: 4.9,
    progress: 75
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    color: '#eab308',
    gradient: 'from-yellow-400 to-orange-500',
    description: 'Dynamic web programming',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: 64,
    enrolled: 22300,
    rating: 4.8,
    progress: 45
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Versatile programming language',
    difficulty: 'Beginner',
    duration: '6 weeks',
    lessons: 56,
    enrolled: 31200,
    rating: 4.9,
    progress: 60
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#ef4444',
    gradient: 'from-red-500 to-orange-600',
    description: 'Enterprise-grade development',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    lessons: 72,
    enrolled: 15800,
    rating: 4.7,
    progress: 20
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: '⚙️',
    color: '#8b5cf6',
    gradient: 'from-purple-500 to-pink-600',
    description: 'High-performance computing',
    difficulty: 'Advanced',
    duration: '12 weeks',
    lessons: 84,
    enrolled: 12400,
    rating: 4.6,
    progress: 15
  },
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    color: '#06b6d4',
    gradient: 'from-cyan-400 to-blue-500',
    description: 'Modern UI development',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: 58,
    enrolled: 28900,
    rating: 4.9,
    progress: 55
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: '🟢',
    color: '#10b981',
    gradient: 'from-green-500 to-emerald-600',
    description: 'Backend JavaScript runtime',
    difficulty: 'Intermediate',
    duration: '7 weeks',
    lessons: 52,
    enrolled: 19600,
    rating: 4.8,
    progress: 30
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: '🗄️',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Database management',
    difficulty: 'Beginner',
    duration: '5 weeks',
    lessons: 38,
    enrolled: 16700,
    rating: 4.7,
    progress: 40
  },
  {
    id: 'dsa',
    name: 'Data Structures',
    icon: '🧮',
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Algorithms & problem solving',
    difficulty: 'Advanced',
    duration: '14 weeks',
    lessons: 96,
    enrolled: 21500,
    rating: 4.9,
    progress: 25
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: '🔀',
    color: '#f97316',
    gradient: 'from-orange-600 to-red-500',
    description: 'Version control mastery',
    difficulty: 'Beginner',
    duration: '3 weeks',
    lessons: 24,
    enrolled: 24300,
    rating: 4.8,
    progress: 80
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '📘',
    color: '#3b82f6',
    gradient: 'from-blue-600 to-indigo-600',
    description: 'Type-safe JavaScript',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    lessons: 46,
    enrolled: 17800,
    rating: 4.8,
    progress: 35
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    color: '#0ea5e9',
    gradient: 'from-sky-500 to-blue-600',
    description: 'Containerization essentials',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    lessons: 32,
    enrolled: 13900,
    rating: 4.7,
    progress: 10
  }
];
