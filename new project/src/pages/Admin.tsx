import { useState } from 'react';
import { Users, BookOpen, TrendingUp, DollarSign, Eye, Activity, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const userGrowth = [
  { month: 'Jan', users: 12400 },
  { month: 'Feb', users: 15800 },
  { month: 'Mar', users: 19200 },
  { month: 'Apr', users: 24600 },
  { month: 'May', users: 31500 },
  { month: 'Jun', users: 38900 },
];

const coursePopularity = [
  { name: 'Python', students: 31200 },
  { name: 'JavaScript', students: 22300 },
  { name: 'React', students: 28900 },
  { name: 'Java', students: 15800 },
  { name: 'C++', students: 12400 },
  { name: 'Node.js', students: 19600 },
];

const engagementData = [
  { name: 'Active', value: 65, color: '#10b981' },
  { name: 'Inactive', value: 25, color: '#ef4444' },
  { name: 'New', value: 10, color: '#3b82f6' },
];

const recentUsers = [
  { id: 1, name: 'Emma Thompson', email: 'emma@example.com', joined: '2 hours ago', status: 'active' },
  { id: 2, name: 'Liam Chen', email: 'liam@example.com', joined: '5 hours ago', status: 'active' },
  { id: 3, name: 'Olivia Martinez', email: 'olivia@example.com', joined: '1 day ago', status: 'pending' },
  { id: 4, name: 'Noah Williams', email: 'noah@example.com', joined: '2 days ago', status: 'active' },
  { id: 5, name: 'Ava Johnson', email: 'ava@example.com', joined: '3 days ago', status: 'inactive' },
];

const systemAlerts = [
  { id: 1, type: 'warning', message: 'Server load at 85%', time: '10 mins ago' },
  { id: 2, type: 'success', message: 'Database backup completed', time: '1 hour ago' },
  { id: 3, type: 'info', message: 'New course published: Advanced React', time: '2 hours ago' },
];

export default function Admin() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'users' | 'content' | 'analytics'>('overview');

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-5xl mb-2">Admin Dashboard</h1>
        <p className="text-gray-400 text-lg">
          Monitor platform performance and manage content
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'users', label: 'Users' },
          { id: 'content', label: 'Content' },
          { id: 'analytics', label: 'Analytics' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id as any)}
            className={`
              px-6 py-3 whitespace-nowrap transition-all
              ${selectedTab === tab.id
                ? 'text-white border-b-2 border-[#10b981]'
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {selectedTab === 'overview' && (
        <>
          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="p-6" glow>
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-[#3b82f6]" />
                <span className="text-[#10b981] text-sm">+12.5%</span>
              </div>
              <div className="text-white text-3xl mb-1">50,284</div>
              <p className="text-gray-400">Total Users</p>
            </GlassCard>

            <GlassCard className="p-6" glow>
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-[#10b981]" />
                <span className="text-[#10b981] text-sm">+8.2%</span>
              </div>
              <div className="text-white text-3xl mb-1">1,248</div>
              <p className="text-gray-400">Active Courses</p>
            </GlassCard>

            <GlassCard className="p-6" glow>
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-[#f59e0b]" />
                <span className="text-[#10b981] text-sm">+15.8%</span>
              </div>
              <div className="text-white text-3xl mb-1">94.2%</div>
              <p className="text-gray-400">Engagement Rate</p>
            </GlassCard>

            <GlassCard className="p-6" glow>
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-[#ec4899]" />
                <span className="text-[#10b981] text-sm">+6.3%</span>
              </div>
              <div className="text-white text-3xl mb-1">8.4K</div>
              <p className="text-gray-400">Daily Active Users</p>
            </GlassCard>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard className="p-6">
              <h2 className="text-white text-2xl mb-6">User Growth</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-white text-2xl mb-6">User Engagement</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={engagementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {engagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>

          {/* System Alerts */}
          <GlassCard className="p-6">
            <h2 className="text-white text-2xl mb-6">System Alerts</h2>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  {alert.type === 'warning' && <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />}
                  {alert.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />}
                  {alert.type === 'info' && <Activity className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />}
                  <div className="flex-1">
                    <p className="text-white mb-1">{alert.message}</p>
                    <p className="text-gray-400 text-sm">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </>
      )}

      {selectedTab === 'users' && (
        <>
          <GlassCard className="p-6">
            <h2 className="text-white text-2xl mb-6">Recent Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-400">Name</th>
                    <th className="px-6 py-4 text-left text-gray-400">Email</th>
                    <th className="px-6 py-4 text-left text-gray-400">Joined</th>
                    <th className="px-6 py-4 text-left text-gray-400">Status</th>
                    <th className="px-6 py-4 text-left text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-t border-white/10 hover:bg-white/5">
                      <td className="px-6 py-4 text-white">{user.name}</td>
                      <td className="px-6 py-4 text-gray-400">{user.email}</td>
                      <td className="px-6 py-4 text-gray-400">{user.joined}</td>
                      <td className="px-6 py-4">
                        <span className={`
                          px-3 py-1 rounded-full text-xs
                          ${user.status === 'active' ? 'bg-[#10b981]/20 text-[#10b981]' : ''}
                          ${user.status === 'inactive' ? 'bg-[#ef4444]/20 text-[#ef4444]' : ''}
                          ${user.status === 'pending' ? 'bg-[#f59e0b]/20 text-[#f59e0b]' : ''}
                        `}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-[#3b82f6] hover:text-[#10b981] transition-colors">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </>
      )}

      {selectedTab === 'content' && (
        <>
          <GlassCard className="p-6">
            <h2 className="text-white text-2xl mb-6">Course Popularity</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={coursePopularity}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <BookOpen className="w-8 h-8 text-[#3b82f6] mb-3" />
              <div className="text-white text-3xl mb-1">1,248</div>
              <p className="text-gray-400">Total Courses</p>
            </GlassCard>
            <GlassCard className="p-6">
              <Eye className="w-8 h-8 text-[#10b981] mb-3" />
              <div className="text-white text-3xl mb-1">8,942</div>
              <p className="text-gray-400">Total Lessons</p>
            </GlassCard>
            <GlassCard className="p-6">
              <Clock className="w-8 h-8 text-[#f59e0b] mb-3" />
              <div className="text-white text-3xl mb-1">456h</div>
              <p className="text-gray-400">Content Duration</p>
            </GlassCard>
          </div>
        </>
      )}

      {selectedTab === 'analytics' && (
        <>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-6">
              <h2 className="text-white text-2xl mb-6">Completion Rates</h2>
              <div className="space-y-4">
                {coursePopularity.slice(0, 5).map((course) => (
                  <div key={course.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">{course.name}</span>
                      <span className="text-gray-400">{Math.floor(Math.random() * 30 + 60)}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#3b82f6] to-[#10b981]"
                        style={{ width: `${Math.floor(Math.random() * 30 + 60)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-white text-2xl mb-6">Platform Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <span className="text-gray-400">Avg. Session Duration</span>
                  <span className="text-white">42 minutes</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <span className="text-gray-400">Daily Page Views</span>
                  <span className="text-white">125K</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <span className="text-gray-400">Bounce Rate</span>
                  <span className="text-white">24.3%</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <span className="text-gray-400">User Retention</span>
                  <span className="text-white">87.5%</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </>
      )}
    </div>
  );
}
