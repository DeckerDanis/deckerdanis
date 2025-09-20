'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  FireIcon,
  SparklesIcon,
  NewspaperIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { newsArticles, newsCategories, getArticlesByCategory, getFeaturedArticles, searchArticles, type NewsArticle } from '@/lib/news-data';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

function NewsCard({ article, featured = false }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Game Updates': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Development': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Community': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Announcements': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Behind the Scenes': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'Industry News': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  if (featured) {
    return (
      <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-in-up">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>
          
          {/* Featured Badge */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <FireIcon className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-medium text-yellow-300">Featured</span>
            </div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-300 mb-4 line-clamp-2">{article.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{getReadTime(article.content)} min read</span>
                </div>
              </div>
              
              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg transition-all duration-200 hover:transform hover:scale-105"
              >
                <span>Read More</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <UserIcon className="w-3 h-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-3 h-3" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </div>
          
          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Read</span>
            <ArrowRightIcon className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function NewsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSortedArticles = useMemo(() => {
    let filtered;
    if (searchTerm) {
      filtered = searchArticles(searchTerm).filter((article: NewsArticle) => 
        selectedCategory === 'All' || article.category === selectedCategory
      );
    } else {
      filtered = getArticlesByCategory(selectedCategory);
    }

    // Sort articles
    filtered.sort((a: NewsArticle, b: NewsArticle) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'oldest':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredArticles = getFeaturedArticles().slice(0, 2);
  const regularArticles = filteredAndSortedArticles.filter((article: NewsArticle) => !article.featured || !featuredArticles.includes(article));

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-60 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-xl animate-float animation-delay-600"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6 animate-fade-in-up">
          <NewspaperIcon className="w-4 h-4 text-purple-400 mr-2" />
          <span className="text-sm font-medium text-purple-300">Latest Updates</span>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-6 font-orbitron animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            News & Updates
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Stay up to date with the latest game updates, development insights, community highlights, 
          and behind-the-scenes content from RPG Studio.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700/50 animate-fade-in-up animation-delay-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
            />
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <TagIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              {newsCategories.map((category: string) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Alphabetical</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && searchTerm === '' && selectedCategory === 'All' && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <SparklesIcon className="w-6 h-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Featured Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article: NewsArticle, index: number) => (
              <NewsCard 
                key={article.id} 
                article={article} 
                featured={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-400" />
          <span className="text-gray-300">
            {searchTerm || selectedCategory !== 'All' ? (
              <>Showing {filteredAndSortedArticles.length} of {newsArticles.length} articles</>
            ) : (
              <>Latest Articles ({regularArticles.length})</>
            )}
          </span>
          {searchTerm && (
            <span className="text-purple-400">for "{searchTerm}"</span>
          )}
        </div>
        
        {(searchTerm || selectedCategory !== 'All') && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {regularArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article: NewsArticle, index: number) => (
            <NewsCard 
              key={article.id} 
              article={article}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            <NewspaperIcon className="w-24 h-24 text-gray-400 mx-auto relative animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            {searchTerm || selectedCategory !== 'All' 
              ? "Try adjusting your search terms or filters to find what you're looking for."
              : "Check back soon for the latest updates and news from our team."
            }
          </p>
          
          {(searchTerm || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 hover:transform hover:scale-105"
            >
              Clear All Filters
            </button>
          )}
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="mt-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to get the latest updates, exclusive content, 
          and behind-the-scenes insights delivered straight to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}