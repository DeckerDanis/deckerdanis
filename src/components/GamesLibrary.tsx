'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon, FunnelIcon, StarIcon, PlayIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import { gamesData, getAllGenres, getAllPlatforms, type Game } from '@/lib/games-data';

const GamesLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  const genres = getAllGenres();
  const platforms = getAllPlatforms();

  const filteredAndSortedGames = useMemo(() => {
    let filtered = gamesData.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || game.genre.includes(selectedGenre);
      const matchesPlatform = selectedPlatform === 'all' || game.platform.includes(selectedPlatform);
      const matchesStatus = selectedStatus === 'all' || game.status === selectedStatus;
      
      return matchesSearch && matchesGenre && matchesPlatform && matchesStatus;
    });

    // Sort games
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'releaseDate':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedGenre, selectedPlatform, selectedStatus, sortBy]);

  // CHANGED: 상태 뱃지 색상을 새로운 테마에 맞게 수정했습니다.
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Released':
        return 'bg-gray-200/20 text-gray-100 border-gray-400/30'; // 완료된 느낌을 위해 중립적인 색상으로 변경
      case 'Early Access':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30'; // 진행 중인 느낌을 위해 주황색 사용
      case 'Coming Soon':
        return 'bg-red-500/20 text-red-400 border-red-500/30'; // 기대감을 주는 붉은색 강조
      case 'In Development':
        return 'bg-red-600/20 text-red-500 border-red-600/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Animated Background Elements - CHANGED: 보라색/파란색을 붉은색 계열로 변경 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-600/10 rounded-full blur-xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-red-500/15 rounded-full blur-xl animate-float animation-delay-600"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative">
        {/* CHANGED: 헤더 뱃지 색상 변경 */}
        <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6 animate-fade-in-up">
          <PlayIcon className="w-4 h-4 text-red-400 mr-2" />
          <span className="text-sm font-medium text-red-300">Epic Gaming Collection</span>
        </div>
        <h1 className="text-6xl font-bold text-white mb-6 font-orbitron animate-fade-in-up animation-delay-200">
          {/* CHANGED: 메인 타이틀 그라데이션을 붉은색과 흰색으로 변경 */}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent animate-gradient-x">
            Games Library
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Explore our collection of epic RPG games. From mystical realms to legendary adventures, 
          discover your next gaming obsession in our carefully curated library.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{gamesData.length}</div>
            <div className="text-sm text-gray-400">Total Games</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{genres.length}</div>
            <div className="text-sm text-gray-400">Genres</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{platforms.length}</div>
            <div className="text-sm text-gray-400">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">4.6</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Games</h2>
            <p className="text-gray-400">Our most popular and highly-rated titles</p>
          </div>
          {/* CHANGED: 링크 색상 변경 */}
          <Link href="#all-games" className="text-red-400 hover:text-red-300 transition-colors font-medium">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gamesData.slice(0, 2).map((game, index) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              // CHANGED: 카드 호버 시 테두리 색상 변경
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-in-up ${index === 1 ? 'animation-delay-200' : ''}`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={game.images.hero}
                  alt={game.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full border backdrop-blur-sm ${getStatusBadgeColor(game.status)}`}>
                    {game.status}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-2">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{game.rating}</span>
                    <span className="text-gray-300 text-sm">({game.reviewCount})</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* CHANGED: 타이틀 호버 시 색상 변경 */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {game.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {game.genre.slice(0, 3).map((genre, idx) => (
                      // CHANGED: 장르 태그 색상 변경
                      <span key={idx} className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded-full">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${game.price}</div>
                    {game.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">${game.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div id="all-games" className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50 animate-fade-in-up">
        <div className="flex items-center mb-6">
          {/* CHANGED: 아이콘 색상 변경 */}
          <FunnelIcon className="w-6 h-6 text-red-400 mr-3" />
          <h3 className="text-xl font-semibold text-white">Filter & Search Games</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-3">
              <MagnifyingGlassIcon className="w-4 h-4 inline mr-2" />
              Search Games
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
              />
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-gray-300 mb-3">
              <TagIcon className="w-4 h-4 inline mr-2" />
              Genre
            </label>
            <select
              id="genre"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
            >
              <option value="all">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="platform" className="block text-sm font-medium text-gray-300 mb-3">
              Platform
            </label>
            <select
              id="platform"
              value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
            >
              <option value="all">All Platforms</option>
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-300 mb-3">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
            >
              <option value="title">Title A-Z</option>
              <option value="releaseDate">Newest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            <CalendarIcon className="w-4 h-4 inline mr-2" />
            Release Status
          </label>
          <div className="flex flex-wrap gap-3">
            {['all', 'Released', 'Early Access', 'Coming Soon'].map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                // CHANGED: 버튼 활성/비활성 색상 변경
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  selectedStatus === status
                    ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-500/25'
                    : 'bg-slate-700/50 text-gray-300 border-slate-600 hover:bg-slate-600/50 hover:border-slate-500'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count & View Toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <p className="text-gray-300 font-medium">
            Showing <span className="text-white font-bold">{filteredAndSortedGames.length}</span> of <span className="text-white font-bold">{gamesData.length}</span> games
          </p>
          {searchTerm && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">for</span>
              {/* CHANGED: 검색어 뱃지 색상 변경 */}
              <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-medium">
                "{searchTerm}"
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedGames.map((game, index) => (
          <Link
            key={game.id}
            href={`/games/${game.slug}`}
            // CHANGED: 카드 호버 시 테두리 및 그림자 색상 변경
            className={`group block bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20 animate-fade-in-up`}
            style={{ animationDelay: `${(index % 8) * 100}ms` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={game.images.thumbnail}
                alt={game.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${getStatusBadgeColor(game.status)}`}>
                  {game.status}
                </span>
              </div>

              <div className="absolute top-4 left-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white font-bold">${game.price}</span>
                  {game.originalPrice && (
                    <span className="text-gray-400 text-xs line-through ml-1">${game.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{game.rating}</span>
                  <span className="text-gray-300 text-xs">({game.reviewCount})</span>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <PlayIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* CHANGED: 타이틀 호버 시 색상 변경 */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-1">
                {game.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                {game.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {game.genre.slice(0, 2).map((genre, idx) => (
                  // CHANGED: 장르 태그 색상 변경
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded-full font-medium"
                  >
                    {genre}
                  </span>
                ))}
                {game.genre.length > 2 && (
                  <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">
                    +{game.genre.length - 2}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex flex-wrap gap-1">
                  {game.platform.slice(0, 3).map((platform, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded-md"
                    >
                      {platform}
                    </span>
                  ))}
                  {game.platform.length > 3 && (
                    <span className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded-md">
                      +{game.platform.length - 3}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {new Date(game.releaseDate).getFullYear()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredAndSortedGames.length === 0 && (
        <div className="text-center py-20 animate-fade-in-up">
          <div className="relative inline-block mb-8">
            <div className="text-8xl mb-4 animate-float">👻</div>
            {/* CHANGED: 애니메이션 색상 변경 */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">No games found</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            We couldn't find any games matching your criteria. Try adjusting your search or filters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* CHANGED: 버튼 색상 변경 */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedGenre('all');
                setSelectedPlatform('all');
                setSelectedStatus('all');
              }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-all duration-200 hover:transform hover:scale-105"
            >
              Clear All Filters
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-all duration-200 hover:transform hover:scale-105"
            >
              Request a Game
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesLibrary;