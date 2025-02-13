import { useNavigate } from 'react-router-dom';
    import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';

    const sampleAchievements = [
      {
        id: 1,
        title: "Rising Star",
        description: "First-time director with exceptional debut film",
        recipient: "Emma Chen",
        project: "The Last Light",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
        award: "Best New Director"
      },
      {
        id: 2,
        title: "Innovation Excellence",
        description: "Groundbreaking use of AI in filmmaking",
        recipient: "David Park",
        project: "Digital Dreams",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
        award: "Technical Achievement"
      },
      {
        id: 3,
        title: "Community Choice",
        description: "Highest audience engagement and ratings",
        recipient: "Maria Garcia",
        project: "City Lights",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
        award: "Audience Favorite"
      }
    ];

    function MeritSystem() {
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

            <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-xl p-8 mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Merit-Based Recognition</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Success based on talent and creativity, not industry connections. Our
                merit system ensures fair recognition and rewards for exceptional work
                in the film industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-xl">
                <Trophy className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Achievement System</h3>
                <p className="text-gray-400">Recognition for outstanding contributions</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <Medal className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Skill Badges</h3>
                <p className="text-gray-400">Showcase your expertise and specialties</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <Award className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Peer Recognition</h3>
                <p className="text-gray-400">Endorsed by industry professionals</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Recent Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sampleAchievements.map((achievement) => (
                <div key={achievement.id} className="bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{achievement.description}</p>
                    <div className="bg-gray-700 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-400">Recipient</p>
                      <p className="text-white font-bold">{achievement.recipient}</p>
                      <p className="text-sm text-gray-400 mt-2">Project</p>
                      <p className="text-white font-bold">{achievement.project}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-semibold">{achievement.award}</span>
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                        View Details
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

    export default MeritSystem;