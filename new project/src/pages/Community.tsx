import { useState } from 'react';
import { MessageSquare, Heart, Share2, Eye, TrendingUp, Plus, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const posts = [
  {
    id: 1,
    author: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    time: '2 hours ago',
    title: 'Just completed my first React project! 🎉',
    content: 'After 3 weeks of learning React, I finally built my first full project - a task manager app with hooks and context API. The journey was challenging but incredibly rewarding!',
    tags: ['React', 'JavaScript', 'Beginner'],
    likes: 124,
    comments: 18,
    views: 856,
    liked: false,
  },
  {
    id: 2,
    author: 'Marcus Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    time: '5 hours ago',
    title: 'Best resources for learning Data Structures?',
    content: 'I\'m preparing for technical interviews and looking for comprehensive DS&A resources. What worked best for you? Looking for both theory and practice problems.',
    tags: ['DSA', 'Interview Prep', 'Question'],
    likes: 89,
    comments: 32,
    views: 1240,
    liked: true,
  },
  {
    id: 3,
    author: 'Emily Watson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    time: '1 day ago',
    title: 'Python vs JavaScript - Which one first?',
    content: 'New to programming and torn between Python and JavaScript. Both seem great but I can only focus on one right now. What do you recommend for web development?',
    tags: ['Python', 'JavaScript', 'Advice'],
    likes: 156,
    comments: 47,
    views: 2150,
    liked: false,
  },
  {
    id: 4,
    author: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    time: '2 days ago',
    title: 'Share: My coding journey from zero to job offer',
    content: 'Six months ago, I knew nothing about coding. Today, I accepted a junior developer position! Here\'s what worked for me: consistent daily practice, building projects, and never giving up.',
    tags: ['Success Story', 'Motivation', 'Career'],
    likes: 342,
    comments: 68,
    views: 4280,
    liked: true,
  },
];

const categories = ['All', 'Questions', 'Projects', 'Resources', 'Success Stories', 'General'];

export default function Community() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>(posts.filter(p => p.liked).map(p => p.id));

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-white text-5xl mb-2">Community Forum</h1>
          <p className="text-gray-400 text-lg">
            Connect, share, and learn with fellow developers
          </p>
        </div>
        <GradientButton variant="success">
          <Plus className="w-5 h-5 mr-2 inline" />
          New Post
        </GradientButton>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <MessageSquare className="w-8 h-8 text-[#3b82f6] mb-3" />
          <div className="text-white text-3xl mb-1">2.4K</div>
          <p className="text-gray-400">Total Posts</p>
        </GlassCard>
        <GlassCard className="p-6">
          <TrendingUp className="w-8 h-8 text-[#10b981] mb-3" />
          <div className="text-white text-3xl mb-1">12.8K</div>
          <p className="text-gray-400">Active Members</p>
        </GlassCard>
        <GlassCard className="p-6">
          <Heart className="w-8 h-8 text-[#ef4444] mb-3" />
          <div className="text-white text-3xl mb-1">45K</div>
          <p className="text-gray-400">Total Reactions</p>
        </GlassCard>
        <GlassCard className="p-6">
          <Eye className="w-8 h-8 text-[#f59e0b] mb-3" />
          <div className="text-white text-3xl mb-1">180K</div>
          <p className="text-gray-400">Total Views</p>
        </GlassCard>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Search */}
          <GlassCard className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>
          </GlassCard>

          {/* Categories */}
          <GlassCard className="p-4">
            <h3 className="text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    w-full text-left px-4 py-2 rounded-lg transition-all
                    ${selectedCategory === category
                      ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white'
                      : 'text-gray-400 hover:bg-white/5'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </GlassCard>

          {/* Trending Tags */}
          <GlassCard className="p-4">
            <h3 className="text-white mb-4">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Python', 'JavaScript', 'DSA', 'Interview', 'Projects'].map(tag => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] text-sm hover:bg-[#3b82f6]/30 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Posts Feed */}
        <div className="lg:col-span-3 space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 hover:ring-2 hover:ring-[#3b82f6]/50 transition-all cursor-pointer">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white">{post.author}</h4>
                    <p className="text-gray-400 text-sm">{post.time}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white text-xl mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.content}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(post.id);
                    }}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#ef4444] transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedPosts.includes(post.id) ? 'fill-[#ef4444] text-[#ef4444]' : ''
                      }`}
                    />
                    <span>{post.likes + (likedPosts.includes(post.id) && !post.liked ? 1 : 0)}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-[#3b82f6] transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-[#10b981] transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <div className="flex items-center gap-2 text-gray-400 ml-auto">
                    <Eye className="w-5 h-5" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* Load More */}
          <div className="text-center">
            <GradientButton variant="secondary">Load More Posts</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}
