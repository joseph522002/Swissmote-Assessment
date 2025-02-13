
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Award, Globe } from 'lucide-react';

const sampleTalent = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Director",
    specialty: "Action & Drama",
    rating: 4.9,
    projects: 15,
    location: "Los Angeles, CA",
    available: true,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Cinematographer",
    specialty: "Natural Light & Documentary",
    rating: 4.8,
    projects: 23,
    location: "New York, NY",
    available: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "VFX Artist",
    specialty: "3D Animation & Compositing",
    rating: 4.7,
    projects: 18,
    location: "London, UK",
    available: false,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

function TalentNetwork() {
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

        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Global Talent Network</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Connect with exceptional filmmaking talent from around the world. Our network
            brings together directors, cinematographers, editors, and other professionals
            to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <Star className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Verified Talent</h3>
            <p className="text-gray-400">All professionals are vetted and reviewed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Award className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Top Skills</h3>
            <p className="text-gray-400">Access to industry-leading expertise</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Globe className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
            <p className="text-gray-400">Connect with talent worldwide</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Featured Talent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTalent.map((talent) => (
            <div key={talent.id} className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    talent.available 
                      ? 'bg-green-900 text-green-200' 
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {talent.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{talent.name}</h3>
                <p className="text-purple-400 mb-2">{talent.role}</p>
                <p className="text-gray-400 mb-4">{talent.specialty}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-white mr-2">{talent.rating}</span>
                  <span className="text-gray-400">({talent.projects} projects)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{talent.location}</span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Connect
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

export default TalentNetwork;