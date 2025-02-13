import React from 'react';
import { Camera, Users, Coins, Share2, Star, TrendingUp } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AIProduction from './pages/AIProduction';
import DecentralizedFunding from './pages/DecentralizedFunding';
import TalentNetwork from './pages/TalentNetwork';
import Distribution from './pages/Distribution';
import MeritSystem from './pages/MeritSystem';
import GrowthOpportunities from './pages/GrowthOpportunities';

function FeatureCard({ icon: Icon, title, description, onClick }: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  onClick: () => void 
}) {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            The Future of Filmmaking is
            <span className="text-indigo-400"> Decentralized</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Empowering creators worldwide with AI-powered tools and decentralized funding to bring their visions to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Start Creating
            </button>
            <button className="px-8 py-4 bg-white bg-opacity-10 text-white rounded-lg font-semibold hover:bg-opacity-20 transition-colors">
              Explore Projects
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Revolutionizing the Film Industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Camera}
            title="AI-Powered Production"
            description="Cutting-edge AI tools for rapid, cost-effective movie production and post-processing."
            onClick={() => navigate('/ai-production')}
          />
          <FeatureCard
            icon={Coins}
            title="Decentralized Funding"
            description="Revolutionary crowdfunding mechanisms connecting visionary creators with passionate investors."
            onClick={() => navigate('/funding')}
          />
          <FeatureCard
            icon={Users}
            title="Global Talent Network"
            description="Access a worldwide community of creators, artists, and industry professionals."
            onClick={() => navigate('/talent')}
          />
          <FeatureCard
            icon={Share2}
            title="Distribution Platform"
            description="Direct-to-audience distribution channels that maximize reach and revenue."
            onClick={() => navigate('/distribution')}
          />
          <FeatureCard
            icon={Star}
            title="Meritocratic System"
            description="Success based on talent and creativity, not industry connections."
            onClick={() => navigate('/merit')}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Growth Opportunities"
            description="Equity-based model ensuring creators benefit from their success."
            onClick={() => navigate('/growth')}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the next generation of filmmaking. Create, collaborate, and succeed in the decentralized future of entertainment.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ai-production" element={<AIProduction />} />
        <Route path="/funding" element={<DecentralizedFunding />} />
        <Route path="/talent" element={<TalentNetwork />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/merit" element={<MeritSystem />} />
        <Route path="/growth" element={<GrowthOpportunities />} />
      </Routes>
    </Router>
  );
}

export default App;