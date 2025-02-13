
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Target } from 'lucide-react';

const sampleProjects = [
  {
    id: 1,
    title: "Neon Dreams",
    genre: "Sci-Fi",
    fundingGoal: "$500,000",
    raised: "$325,000",
    progress: 65,
    backers: 1250,
    daysLeft: 15,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "The Last Symphony",
    genre: "Drama",
    fundingGoal: "$250,000",
    raised: "$180,000",
    progress: 72,
    backers: 890,
    daysLeft: 8,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Urban Legends",
    genre: "Documentary",
    fundingGoal: "$150,000",
    raised: "$95,000",
    progress: 63,
    backers: 720,
    daysLeft: 21,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80"
  }
];

function DecentralizedFunding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-300 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-gradient-to-r from-green-900 to-teal-900 rounded-xl p-8 mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Decentralized Funding Platform</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Connect with passionate investors and supporters who believe in your vision.
            Our decentralized funding platform ensures transparent, efficient, and fair
            distribution of resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Contracts</h3>
            <p className="text-gray-400">Automated and transparent fund distribution</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Users className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community Backing</h3>
            <p className="text-gray-400">Connect with passionate supporters worldwide</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Target className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Milestone-based</h3>
            <p className="text-gray-400">Clear goals and transparent progress tracking</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-gray-400">{project.genre}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-900 text-green-200 text-sm rounded-full">
                    {project.daysLeft} days left
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-gray-400 text-sm mb-4">
                  <span>Raised: {project.raised}</span>
                  <span>Goal: {project.fundingGoal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{project.backers} backers</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Back Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DecentralizedFunding;