import { useState } from 'react';
import { Download, BookOpen, Star, Search, Filter, ExternalLink, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const categories = ['All', 'HTML/CSS', 'JavaScript', 'Python', 'React', 'Algorithms', 'Database'];

const notes = [
  {
    id: 1,
    title: 'Complete HTML5 Reference Guide',
    category: 'HTML/CSS',
    source: 'W3Schools',
    pages: 45,
    downloads: 12400,
    rating: 4.9,
    size: '2.4 MB',
    color: '#f59e0b',
    bookmarked: true,
    url: 'https://www.w3schools.com/html/'
  },
  {
    id: 2,
    title: 'JavaScript ES6+ Cheat Sheet',
    category: 'JavaScript',
    source: 'freeCodeCamp',
    pages: 28,
    downloads: 18900,
    rating: 4.8,
    size: '1.8 MB',
    color: '#eab308',
    bookmarked: false,
    url: 'https://www.freecodecamp.org/news/javascript-es6-cheatsheet/'
  },
  {
    id: 3,
    title: 'Python for Beginners',
    category: 'Python',
    source: 'GitHub Education',
    pages: 120,
    downloads: 24300,
    rating: 4.9,
    size: '5.2 MB',
    color: '#3b82f6',
    bookmarked: true,
    url: 'https://github.com/EbookFoundation/free-programming-books'
  },
  {
    id: 4,
    title: 'React Hooks Deep Dive',
    category: 'React',
    source: 'React Docs',
    pages: 67,
    downloads: 15600,
    rating: 4.7,
    size: '3.1 MB',
    color: '#06b6d4',
    bookmarked: false,
    url: 'https://react.dev/'
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms',
    category: 'Algorithms',
    source: 'Codecademy',
    pages: 156,
    downloads: 21800,
    rating: 4.8,
    size: '8.5 MB',
    color: '#ec4899',
    bookmarked: true,
    url: 'https://www.codecademy.com/'
  },
  {
    id: 6,
    title: 'SQL Mastery Guide',
    category: 'Database',
    source: 'W3Schools',
    pages: 89,
    downloads: 16200,
    rating: 4.6,
    size: '4.3 MB',
    color: '#6366f1',
    bookmarked: false,
    url: 'https://www.w3schools.com/sql/'
  },
  {
    id: 7,
    title: 'CSS Grid & Flexbox',
    category: 'HTML/CSS',
    source: 'CSS Tricks',
    pages: 34,
    downloads: 14500,
    rating: 4.8,
    size: '2.1 MB',
    color: '#f59e0b',
    bookmarked: false,
    url: 'https://css-tricks.com/'
  },
  {
    id: 8,
    title: 'Advanced JavaScript Patterns',
    category: 'JavaScript',
    source: 'GitHub',
    pages: 98,
    downloads: 19400,
    rating: 4.9,
    size: '4.8 MB',
    color: '#eab308',
    bookmarked: true,
    url: 'https://github.com/'
  },
];

export default function Notes() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedNotes, setBookmarkedNotes] = useState<number[]>(
    notes.filter(n => n.bookmarked).map(n => n.id)
  );

  const filteredNotes = notes.filter(note => {
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (id: number) => {
    setBookmarkedNotes(prev =>
      prev.includes(id) ? prev.filter(nId => nId !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Free Notes Library</h1>
        <p className="text-gray-400 text-lg">
          Download free PDF resources from W3Schools, freeCodeCamp, GitHub & more
        </p>
      </motion.div>

      {/* Search & Filter */}
      <GlassCard className="p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-lg whitespace-nowrap transition-all
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <BookOpen className="w-8 h-8 text-[#3b82f6] mb-3" />
          <div className="text-white text-3xl mb-1">{notes.length}</div>
          <p className="text-gray-400">Total Resources</p>
        </GlassCard>
        <GlassCard className="p-6">
          <Download className="w-8 h-8 text-[#10b981] mb-3" />
          <div className="text-white text-3xl mb-1">143K</div>
          <p className="text-gray-400">Total Downloads</p>
        </GlassCard>
        <GlassCard className="p-6">
          <Star className="w-8 h-8 text-[#f59e0b] mb-3" />
          <div className="text-white text-3xl mb-1">4.8</div>
          <p className="text-gray-400">Avg Rating</p>
        </GlassCard>
        <GlassCard className="p-6">
          <Bookmark className="w-8 h-8 text-[#ec4899] mb-3" />
          <div className="text-white text-3xl mb-1">{bookmarkedNotes.length}</div>
          <p className="text-gray-400">Bookmarked</p>
        </GlassCard>
      </div>

      {/* Notes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <GlassCard className="p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${note.color}20` }}
                >
                  <BookOpen className="w-6 h-6" style={{ color: note.color }} />
                </div>
                <button
                  onClick={() => toggleBookmark(note.id)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Bookmark
                    className={`w-5 h-5 ${
                      bookmarkedNotes.includes(note.id)
                        ? 'fill-[#f59e0b] text-[#f59e0b]'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              <h3 className="text-white text-xl mb-2">{note.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{note.source}</p>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="text-gray-400">
                  <span className="text-white">{note.pages}</span> pages
                </div>
                <div className="text-gray-400">
                  <span className="text-white">{note.size}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  <span className="text-white">{note.rating}</span>
                </div>
                <div className="text-gray-400">
                  <Download className="w-4 h-4 inline mr-1" />
                  <span className="text-white">{(note.downloads / 1000).toFixed(1)}K</span>
                </div>
              </div>

              <div className="mt-auto flex gap-2">
                <GradientButton className="flex-1" size="sm" variant="success">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download
                </GradientButton>
                <a
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-xl">No notes found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
