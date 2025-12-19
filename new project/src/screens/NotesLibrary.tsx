import { motion } from 'motion/react';
import { Download, Bookmark, Search, FileText, Star } from 'lucide-react';
import { useState } from 'react';

export function NotesLibrary() {
  const [bookmarked, setBookmarked] = useState<number[]>([1, 3]);

  const notes = [
    { id: 1, title: 'JavaScript ES6+ Cheat Sheet', category: 'JavaScript', pages: 12, downloads: 5420, rating: 4.8 },
    { id: 2, title: 'Python Data Structures Guide', category: 'Python', pages: 18, downloads: 4230, rating: 4.9 },
    { id: 3, title: 'React Hooks Complete Reference', category: 'React', pages: 15, downloads: 6780, rating: 4.7 },
    { id: 4, title: 'SQL Query Optimization', category: 'SQL', pages: 10, downloads: 3450, rating: 4.6 },
    { id: 5, title: 'CSS Flexbox & Grid Layouts', category: 'CSS', pages: 14, downloads: 5890, rating: 4.8 },
    { id: 6, title: 'Git Commands Reference', category: 'Git', pages: 8, downloads: 7120, rating: 4.9 },
    { id: 7, title: 'TypeScript Type System', category: 'TypeScript', pages: 20, downloads: 4560, rating: 4.7 },
    { id: 8, title: 'Node.js Best Practices', category: 'Node.js', pages: 16, downloads: 3890, rating: 4.8 },
    { id: 9, title: 'Algorithm Complexity Guide', category: 'Algorithms', pages: 22, downloads: 5210, rating: 4.9 },
    { id: 10, title: 'Web Security Essentials', category: 'Security', pages: 19, downloads: 4120, rating: 4.7 },
    { id: 11, title: 'REST API Design Patterns', category: 'Backend', pages: 17, downloads: 4670, rating: 4.8 },
    { id: 12, title: 'MongoDB Quick Reference', category: 'Database', pages: 11, downloads: 3980, rating: 4.6 },
  ];

  const categories = ['All', 'JavaScript', 'Python', 'React', 'CSS', 'Backend', 'Algorithms'];

  const toggleBookmark = (id: number) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2">Free Notes Library</h2>
          <p className="opacity-70">Download PDF notes, cheat sheets, and study guides</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full pl-12 pr-4 py-3 rounded-xl glass-card border border-white/10 focus:border-blue-400 outline-none transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'glass-card hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3">
              <FileText className="w-10 h-10 text-blue-400" />
              <div>
                <div className="text-2xl mb-1">{notes.length}</div>
                <div className="text-sm opacity-70">Total Resources</div>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3">
              <Bookmark className="w-10 h-10 text-amber-400" />
              <div>
                <div className="text-2xl mb-1">{bookmarked.length}</div>
                <div className="text-sm opacity-70">Bookmarked</div>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3">
              <Download className="w-10 h-10 text-emerald-400" />
              <div>
                <div className="text-2xl mb-1">54K+</div>
                <div className="text-sm opacity-70">Total Downloads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 hover:shadow-hover transition-all duration-300 group"
            >
              {/* Preview */}
              <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <FileText className="w-16 h-16 text-blue-400 opacity-50" />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => toggleBookmark(note.id)}
                    className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        bookmarked.includes(note.id) ? 'fill-amber-400 text-amber-400' : 'text-white'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 mb-2 inline-block">
                  {note.category}
                </span>
                <h6 className="mb-2 line-clamp-2">{note.title}</h6>
                <div className="flex items-center gap-4 text-sm opacity-70">
                  <span>{note.pages} pages</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>{note.rating}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <div className="text-xs text-center opacity-60">
                  {note.downloads.toLocaleString()} downloads
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-card p-8 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30"
        >
          <h3 className="mb-3">Can't find what you're looking for?</h3>
          <p className="opacity-70 mb-6">Request new study materials or contribute your own notes</p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl glass-card border border-white/20 hover:border-blue-400 transition-all duration-300">
              Request Notes
            </button>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              Contribute
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
