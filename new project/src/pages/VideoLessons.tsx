import { useState } from 'react';
import { Play, Clock, Eye, ThumbsUp, CheckCircle2, BookmarkPlus } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';

const videos = [
  {
    id: 1,
    title: 'HTML Crash Course for Beginners',
    instructor: 'Traversy Media',
    duration: '1:32:45',
    views: '2.4M',
    likes: '87K',
    thumbnail: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?w=800',
    category: 'HTML/CSS',
    level: 'Beginner',
    completed: false,
    description: 'Learn HTML from scratch in this comprehensive crash course'
  },
  {
    id: 2,
    title: 'JavaScript ES6 Tutorial',
    instructor: 'freeCodeCamp',
    duration: '3:26:42',
    views: '5.2M',
    likes: '142K',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    category: 'JavaScript',
    level: 'Intermediate',
    completed: true,
    description: 'Master modern JavaScript with ES6+ features'
  },
  {
    id: 3,
    title: 'Python Full Course',
    instructor: 'Programming with Mosh',
    duration: '6:14:07',
    views: '12.8M',
    likes: '385K',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    category: 'Python',
    level: 'Beginner',
    completed: false,
    description: 'Complete Python programming course for beginners'
  },
  {
    id: 4,
    title: 'React Tutorial for Beginners',
    instructor: 'Codevolution',
    duration: '2:48:18',
    views: '3.1M',
    likes: '98K',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    category: 'React',
    level: 'Intermediate',
    completed: false,
    description: 'Learn React from the ground up'
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms',
    instructor: 'Abdul Bari',
    duration: '5:43:32',
    views: '8.9M',
    likes: '267K',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    category: 'Algorithms',
    level: 'Advanced',
    completed: false,
    description: 'Master DSA for coding interviews'
  },
  {
    id: 6,
    title: 'SQL Database Design',
    instructor: 'Caleb Curry',
    duration: '4:12:54',
    views: '1.9M',
    likes: '62K',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
    category: 'Database',
    level: 'Intermediate',
    completed: true,
    description: 'Complete SQL course with real projects'
  },
];

export default function VideoLessons() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Video Lessons</h1>
        <p className="text-gray-400 text-lg">
          Watch curated video tutorials from top instructors
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="overflow-hidden" glow>
            <div className="aspect-video bg-gradient-to-br from-[#1e3a8a] to-[#0f0f23] relative group">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-20 h-20 rounded-full bg-[#10b981] flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-white text-2xl mb-2">{selectedVideo.title}</h2>
                  <p className="text-gray-400">{selectedVideo.instructor}</p>
                </div>
                <button className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                  <BookmarkPlus className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-300 mb-6">{selectedVideo.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>{selectedVideo.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Eye className="w-5 h-5" />
                  <span>{selectedVideo.views} views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <ThumbsUp className="w-5 h-5" />
                  <span>{selectedVideo.likes} likes</span>
                </div>
                {selectedVideo.completed && (
                  <div className="flex items-center gap-2 text-[#10b981]">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Completed</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">Playback Speed:</span>
                  <div className="flex gap-2">
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map(speed => (
                      <button
                        key={speed}
                        onClick={() => setPlaybackSpeed(speed)}
                        className={`
                          px-3 py-1 rounded-lg text-sm transition-all
                          ${playbackSpeed === speed
                            ? 'bg-[#3b82f6] text-white'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                          }
                        `}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Transcript Section */}
          <GlassCard className="p-6">
            <h3 className="text-white text-xl mb-4">Video Transcript</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              <div className="flex gap-3">
                <span className="text-[#3b82f6] text-sm shrink-0">00:00</span>
                <p className="text-gray-300 text-sm">Welcome to this comprehensive tutorial on {selectedVideo.category}...</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#3b82f6] text-sm shrink-0">00:45</span>
                <p className="text-gray-300 text-sm">In this lesson, we'll cover the fundamental concepts...</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#3b82f6] text-sm shrink-0">02:15</span>
                <p className="text-gray-300 text-sm">Let's start with the basics and build our way up...</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Playlist Sidebar */}
        <div className="space-y-4">
          <h3 className="text-white text-xl">Course Playlist</h3>
          <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="w-full text-left"
                >
                  <GlassCard
                    className={`p-3 ${
                      selectedVideo.id === video.id ? 'ring-2 ring-[#10b981]' : ''
                    }`}
                    hover
                  >
                    <div className="flex gap-3">
                      <div className="relative shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-32 h-20 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                        {video.completed && (
                          <div className="absolute top-1 right-1">
                            <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm mb-1 line-clamp-2">{video.title}</h4>
                        <p className="text-gray-400 text-xs mb-1">{video.instructor}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
