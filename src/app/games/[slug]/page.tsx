import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getGameBySlug, gamesData } from '@/lib/games-data';
import { ArrowLeftIcon, PlayIcon, CalendarIcon, TagIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

interface GamePageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all games
export async function generateStaticParams() {
  return gamesData.map((game) => ({
    slug: game.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    return {
      title: 'Game Not Found | RPG Studio',
    };
  }

  return {
    title: `${game.title} | RPG Studio`,
    description: game.description,
    keywords: [...game.genre, ...game.platform, 'RPG', 'gaming'],
    openGraph: {
      title: `${game.title} | RPG Studio`,
      description: game.description,
      type: 'article',
      images: [
        {
          url: game.images.thumbnail,
          width: 800,
          height: 600,
          alt: game.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} | RPG Studio`,
      description: game.description,
    },
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={game.images.thumbnail}
          alt={game.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Back Button */}
        <Link
          href="/games"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Games
        </Link>

        {/* Game Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">{game.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <TagIcon className="w-5 h-5" />
                {game.genre.join(', ')}
              </span>
              <span className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                {game.releaseDate}
              </span>
              <span className="flex items-center gap-2">
                <DevicePhoneMobileIcon className="w-5 h-5" />
                {game.platform.join(', ')}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                game.status === 'released' ? 'bg-green-600' :
                game.status === 'early-access' ? 'bg-yellow-600' :
                'bg-blue-600'
              }`}>
                {game.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">About the Game</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {game.description}
              </p>
            </section>

            {/* Video Trailer */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Trailer</h2>
              <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={game.images.thumbnail}
                  alt={`${game.title} trailer`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <PlayIcon className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
              </div>
            </section>

            {/* Screenshots Gallery */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={game.images.thumbnail}
                      alt={`${game.title} screenshot ${index}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Game Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Game Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400 text-sm">Developer</span>
                  <p className="text-white font-medium">RPG Studio</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Publisher</span>
                  <p className="text-white font-medium">RPG Studio</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Release Date</span>
                  <p className="text-white font-medium">{game.releaseDate}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Platforms</span>
                  <p className="text-white font-medium">{game.platform.join(', ')}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Genre</span>
                  <p className="text-white font-medium">{game.genre.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* System Requirements */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">System Requirements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-purple-400 font-medium mb-2">Minimum</h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><span className="text-gray-400">OS:</span> Windows 10 64-bit</p>
                    <p><span className="text-gray-400">Processor:</span> Intel i5-4590 / AMD FX 8350</p>
                    <p><span className="text-gray-400">Memory:</span> 8 GB RAM</p>
                    <p><span className="text-gray-400">Graphics:</span> NVIDIA GTX 970 / AMD R9 280</p>
                    <p><span className="text-gray-400">Storage:</span> 50 GB available space</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-purple-400 font-medium mb-2">Recommended</h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><span className="text-gray-400">OS:</span> Windows 11 64-bit</p>
                    <p><span className="text-gray-400">Processor:</span> Intel i7-8700K / AMD Ryzen 5 3600</p>
                    <p><span className="text-gray-400">Memory:</span> 16 GB RAM</p>
                    <p><span className="text-gray-400">Graphics:</span> NVIDIA RTX 3070 / AMD RX 6700 XT</p>
                    <p><span className="text-gray-400">Storage:</span> 50 GB available space (SSD)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download/Purchase Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              {game.status === 'released' ? 'Download Now' : 
               game.status === 'early-access' ? 'Early Access' : 'Wishlist'}
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}