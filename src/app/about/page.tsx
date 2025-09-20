import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  UserGroupIcon, 
  TrophyIcon, 
  HeartIcon, 
  RocketLaunchIcon,
  SparklesIcon,
  GlobeAltIcon,
  CalendarIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us | RPG Studio',
  description: 'Learn about RPG Studio - our story, mission, and the passionate team behind epic gaming experiences. Discover what drives us to create unforgettable adventures.',
  openGraph: {
    title: 'About Us | RPG Studio',
    description: 'Learn about RPG Studio - our story, mission, and the passionate team behind epic gaming experiences.',
  },
};

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    image: '/images/team/alex-chen.jpg',
    bio: 'With over 15 years in game development, Alex founded RPG Studio with a vision to create immersive worlds that captivate players globally.',
    specialties: ['Game Design', 'Narrative', 'Vision']
  },
  {
    name: 'Sarah Martinez',
    role: 'Lead Developer',
    image: '/images/team/sarah-martinez.jpg',
    bio: 'Sarah brings technical excellence to our games, ensuring smooth gameplay and innovative mechanics that push the boundaries of RPG experiences.',
    specialties: ['Engine Development', 'AI Systems', 'Performance']
  },
  {
    name: 'David Kim',
    role: 'Art Director',
    image: '/images/team/david-kim.jpg',
    bio: 'David creates the stunning visual worlds that bring our games to life, from character design to breathtaking environments.',
    specialties: ['Visual Design', '3D Modeling', 'Concept Art']
  },
  {
    name: 'Emma Thompson',
    role: 'Lead Writer',
    image: '/images/team/emma-thompson.jpg',
    bio: 'Emma crafts the compelling narratives and rich lore that make our games emotionally resonant and unforgettable.',
    specialties: ['Storytelling', 'Character Development', 'World Building']
  },
  {
    name: 'Marcus Johnson',
    role: 'Audio Director',
    image: '/images/team/marcus-johnson.jpg',
    bio: 'Marcus creates immersive soundscapes and memorable music that enhance every moment of our gaming experiences.',
    specialties: ['Sound Design', 'Music Composition', 'Audio Engineering']
  },
  {
    name: 'Lisa Wang',
    role: 'Community Manager',
    image: '/images/team/lisa-wang.jpg',
    bio: 'Lisa bridges the gap between our studio and our amazing community, ensuring player feedback shapes our future games.',
    specialties: ['Community Building', 'Player Relations', 'Social Media']
  }
];

const milestones = [
  {
    year: '2018',
    title: 'Studio Founded',
    description: 'RPG Studio was born from a passion to create meaningful gaming experiences.'
  },
  {
    year: '2020',
    title: 'First Game Released',
    description: 'Our debut title gained critical acclaim and a dedicated fanbase.'
  },
  {
    year: '2022',
    title: 'Award Recognition',
    description: 'Won multiple indie game awards for innovation and storytelling.'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Reached over 1 million players worldwide with our game library.'
  }
];

const values = [
  {
    icon: HeartIcon,
    title: 'Passion-Driven',
    description: 'Every game we create comes from genuine love for the craft and our players.'
  },
  {
    icon: SparklesIcon,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver fresh and exciting gaming experiences.'
  },
  {
    icon: UserGroupIcon,
    title: 'Community-First',
    description: 'Our players are at the heart of everything we do, shaping our creative decisions.'
  },
  {
    icon: TrophyIcon,
    title: 'Excellence',
    description: 'We strive for the highest quality in every aspect of game development.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-60 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6 animate-fade-in-up">
            <RocketLaunchIcon className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-300">Our Story</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 font-orbitron animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              About RPG Studio
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            We are a passionate team of developers, artists, and storytellers dedicated to creating 
            immersive RPG experiences that transport players to extraordinary worlds filled with 
            adventure, mystery, and unforgettable characters.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-12 mb-20 border border-slate-700/50 animate-fade-in-up animation-delay-600">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To craft epic RPG adventures that ignite imagination, foster meaningful connections, 
              and create lasting memories for players around the world. We believe that great games 
              have the power to inspire, challenge, and bring people together.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6">
                      <IconComponent className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">Key milestones in our studio's evolution</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The talented individuals behind our games</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Adventure</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to experience our games or interested in joining our team? 
            We'd love to hear from you and share our passion for creating amazing RPG experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/games"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all duration-200 hover:transform hover:scale-105"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Explore Our Games
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-all duration-200 hover:transform hover:scale-105"
            >
              <UserGroupIcon className="w-5 h-5 mr-2" />
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
