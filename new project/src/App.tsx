import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { OnboardingProvider } from './contexts/OnboardingContext';
import Layout from './components/Layout';
import Hero from './pages/Hero';
import LanguageHub from './pages/LanguageHub';
import Dashboard from './pages/Dashboard';
import LanguageDetail from './pages/LanguageDetail';
import Quiz from './pages/Quiz';
import Progress from './pages/Progress';
import Notes from './pages/Notes';
import VideoLessons from './pages/VideoLessons';
import Playground from './pages/Playground';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import DailyChallenges from './pages/DailyChallenges';
import Community from './pages/Community';
import Onboarding from './pages/Onboarding';
import Admin from './pages/Admin';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OnboardingProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/app" element={<Layout />}>
                <Route index element={<Navigate to="/app/hub" replace />} />
                <Route path="hub" element={<LanguageHub />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="language/:id" element={<LanguageDetail />} />
                <Route path="quiz/:language" element={<Quiz />} />
                <Route path="progress" element={<Progress />} />
                <Route path="notes" element={<Notes />} />
                <Route path="videos" element={<VideoLessons />} />
                <Route path="playground" element={<Playground />} />
                <Route path="profile" element={<Profile />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="challenges" element={<DailyChallenges />} />
                <Route path="community" element={<Community />} />
                <Route path="admin" element={<Admin />} />
              </Route>
            </Routes>
          </Router>
        </OnboardingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
