
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, TrendingUp, BarChart3 } from 'lucide-react';

const sampleMovies = [
    {
        id: 1,
        title: "The Digital Frontier",
        genre: "Sci-Fi",
        views: "1.2M",
        revenue: "$850K",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "Urban Tales",
        genre: "Drama",
        views: "950K",
        revenue: "$620K",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Nature's Symphony",
        genre: "Documentary",
        views: "780K",
        revenue: "$450K",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
    }
];

function Distribution() {
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

                <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-xl p-8 mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Distribution Platform</h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        Direct-to-audience distribution channels that maximize reach and revenue.
                        Track performance, engage with your audience, and monetize your content
                        effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-800 p-6 rounded-xl">
                        <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
                        <p className="text-gray-400">Real-time performance tracking</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl">
                        <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Revenue</h3>
                        <p className="text-gray-400">Transparent earnings and payouts</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl">
                        <Star className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Engagement</h3>
                        <p className="text-gray-400">Connect with your audience</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">Trending Content</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sampleMovies.map((movie) => (
                        <div key={movie.id} className="bg-gray-800 rounded-xl overflow-hidden">
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                                <p className="text-blue-400 mb-4">{movie.genre}</p>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="bg-gray-700 p-3 rounded-lg">
                                        <p className="text-gray-400 text-sm">Views</p>
                                        <p className="text-white font-bold">{movie.views}</p>
                                    </div>
                                    <div className="bg-gray-700 p-3 rounded-lg">
                                        <p className="text-gray-400 text-sm">Revenue</p>
                                        <p className="text-white font-bold">{movie.revenue}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                        <span className="text-white">{movie.rating}</span>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Watch Now
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

export default Distribution;