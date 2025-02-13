
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Lightbulb, Target } from 'lucide-react';

const sampleOpportunities = [
  {
    id: 1,
    title: "Equity Partnership Program",
    description: "Join as a founding member and earn equity in successful projects",
    benefits: ["Project ownership", "Revenue sharing", "Creative control"],
    requirements: "Minimum 3 successful projects",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Mentorship Initiative",
    description: "Learn from industry veterans and build valuable connections",
    benefits: ["1-on-1 guidance", "Network access", "Career planning"],
    requirements: "Open to all levels",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Innovation Fund",
    description: "Access capital for experimental projects and new technologies",
    benefits: ["Project funding", "Technical support", "Market access"],
    requirements: "Innovative concept proposal",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80"
  }
];

function GrowthOpportunities() {
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

        <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-xl p-8 mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Growth Opportunities</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Take your career to the next level with our comprehensive growth programs.
            From equity partnerships to mentorship initiatives, we provide the tools
            and support you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
            <p className="text-gray-400">Clear path for professional advancement</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Lightbulb className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Innovation Support</h3>
            <p className="text-gray-400">Resources for creative experimentation</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Target className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Goal Achievement</h3>
            <p className="text-gray-400">Structured programs for success</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Available Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-gray-800 rounded-xl overflow-hidden">
              <img
                src={opportunity.image}
                alt={opportunity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{opportunity.title}</h3>
                <p className="text-gray-400 mb-4">{opportunity.description}</p>
                <div className="mb-4">
                  <h4 className="text-emerald-400 font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {opportunity.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{opportunity.requirements}</span>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Apply Now
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

export default GrowthOpportunities;