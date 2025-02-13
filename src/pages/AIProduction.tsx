
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wand2, VideoIcon, Sparkles } from 'lucide-react';

const sampleProjects = [
  {
    id: 1,
    title: "Scene Enhancer Pro",
    description: "AI-powered scene enhancement with automatic color grading and visual effects",
    status: "Available",
    usageCount: "2.3k",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Script Assistant",
    description: "Natural language processing for script analysis and improvement suggestions",
    status: "Beta",
    usageCount: "1.8k",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "AutoCut Editor",
    description: "Intelligent video editing with automatic scene detection and pacing optimization",
    status: "New",
    usageCount: "956",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80"
  }
];

function AIProduction() {
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

        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-8 mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI-Powered Production Tools</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transform your filmmaking process with our suite of AI-powered tools. From script
            writing to post-production, our technology helps you create professional-quality
            content faster and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <Wand2 className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Automation</h3>
            <p className="text-gray-400">Automate repetitive tasks and focus on creative decisions</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <VideoIcon className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Real-time Processing</h3>
            <p className="text-gray-400">See changes and effects applied instantly as you work</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Sparkles className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Enhanced Quality</h3>
            <p className="text-gray-400">Professional-grade output with minimal manual intervention</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Available Tools</h2>
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
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="px-3 py-1 bg-indigo-900 text-indigo-200 text-sm rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{project.usageCount} users</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Try Now
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

export default AIProduction;