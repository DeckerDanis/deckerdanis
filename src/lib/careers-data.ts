export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Lead';
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedDate: string;
  applicationDeadline?: string;
  remote: boolean;
}

export const jobPostings: JobPosting[] = [
  {
    id: 'senior-game-developer',
    title: 'Senior Game Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Join our team as a Senior Game Developer and help create the next generation of immersive RPG experiences. You\'ll work on cutting-edge gameplay systems, collaborate with designers and artists, and mentor junior developers.',
    responsibilities: [
      'Design and implement core gameplay systems and mechanics',
      'Collaborate with game designers to bring creative visions to life',
      'Optimize game performance across multiple platforms',
      'Mentor junior developers and conduct code reviews',
      'Work closely with QA to identify and fix bugs',
      'Participate in technical design discussions and architecture decisions'
    ],
    requirements: [
      '5+ years of professional game development experience',
      'Strong proficiency in C# and Unity 3D',
      'Experience with multiplayer game development',
      'Knowledge of game optimization techniques',
      'Strong problem-solving and debugging skills',
      'Excellent communication and teamwork abilities'
    ],
    niceToHave: [
      'Experience with Unreal Engine',
      'Knowledge of shader programming',
      'Experience with mobile game development',
      'Familiarity with agile development methodologies',
      'Previous work on published RPG titles'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote options',
      'Professional development budget',
      'Game development equipment and software',
      'Catered meals and snacks',
      'Team building events and game nights'
    ],
    salary: {
      min: 120000,
      max: 180000,
      currency: 'USD'
    },
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-15',
    remote: true
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'We\'re looking for a talented UI/UX Designer to create intuitive and engaging user interfaces for our RPG games. You\'ll work closely with game designers and developers to craft seamless player experiences.',
    responsibilities: [
      'Design user interfaces for game menus, HUD elements, and interactive systems',
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Collaborate with artists to ensure visual consistency',
      'Work with developers to implement designs in-engine',
      'Iterate on designs based on player feedback and analytics'
    ],
    requirements: [
      '3+ years of UI/UX design experience, preferably in gaming',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Strong understanding of user-centered design principles',
      'Experience with prototyping tools and methodologies',
      'Knowledge of accessibility standards and best practices',
      'Portfolio demonstrating game UI/UX work'
    ],
    niceToHave: [
      'Experience with Unity UI system',
      'Knowledge of front-end development (HTML/CSS/JavaScript)',
      'Familiarity with game analytics tools',
      'Experience with mobile game interfaces',
      'Understanding of RPG game mechanics and player psychology'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Health and wellness benefits',
      'Remote work flexibility',
      'Creative software licenses',
      'Conference and training opportunities',
      'Collaborative and creative work environment'
    ],
    salary: {
      min: 80000,
      max: 120000,
      currency: 'USD'
    },
    postedDate: '2024-01-10',
    remote: true
  },
  {
    id: 'game-artist',
    title: '3D Game Artist',
    department: 'Art',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'Join our art team to create stunning 3D assets for our fantasy RPG worlds. You\'ll be responsible for modeling, texturing, and optimizing game-ready assets that bring our magical realms to life.',
    responsibilities: [
      'Create high-quality 3D models for characters, environments, and props',
      'Develop textures and materials using industry-standard tools',
      'Optimize assets for real-time rendering and performance',
      'Collaborate with concept artists and technical artists',
      'Maintain art style consistency across all assets',
      'Work within technical constraints and polygon budgets'
    ],
    requirements: [
      '3+ years of professional 3D art experience in games',
      'Proficiency in Maya, 3ds Max, or Blender',
      'Strong skills in Substance Painter/Designer',
      'Understanding of PBR workflows and real-time rendering',
      'Knowledge of game engine asset pipelines (Unity/Unreal)',
      'Strong artistic eye and attention to detail'
    ],
    niceToHave: [
      'Experience with ZBrush for high-poly sculpting',
      'Knowledge of rigging and animation basics',
      'Familiarity with version control systems (Perforce/Git)',
      'Experience with mobile game optimization',
      'Background in fantasy art and world-building'
    ],
    benefits: [
      'Competitive salary and annual bonuses',
      'Comprehensive benefits package',
      'Art software and hardware budget',
      'Flexible work schedule',
      'Creative freedom and artistic growth opportunities',
      'Team collaboration and mentorship programs'
    ],
    salary: {
      min: 70000,
      max: 110000,
      currency: 'USD'
    },
    postedDate: '2024-01-08',
    remote: false
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    department: 'Quality Assurance',
    location: 'Austin, TX',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'We\'re seeking a detail-oriented QA Engineer to ensure our games meet the highest quality standards. You\'ll test gameplay systems, identify bugs, and work closely with development teams to deliver polished gaming experiences.',
    responsibilities: [
      'Execute test plans and test cases for game features',
      'Identify, document, and track bugs and issues',
      'Perform regression testing on fixed issues',
      'Test games across multiple platforms and devices',
      'Collaborate with developers to reproduce and resolve issues',
      'Participate in game balance and user experience feedback'
    ],
    requirements: [
      '1+ years of QA experience, preferably in gaming',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication',
      'Familiarity with bug tracking tools (JIRA, Bugzilla)',
      'Understanding of different gaming platforms',
      'Passion for gaming and attention to detail'
    ],
    niceToHave: [
      'Experience with automated testing tools',
      'Knowledge of scripting languages (Python, JavaScript)',
      'Familiarity with game engines and development tools',
      'Experience with mobile and console testing',
      'Understanding of accessibility testing'
    ],
    benefits: [
      'Competitive entry-level salary',
      'Health and dental insurance',
      'Professional development opportunities',
      'Game testing equipment and access',
      'Mentorship and career growth programs',
      'Fun and collaborative work environment'
    ],
    salary: {
      min: 50000,
      max: 70000,
      currency: 'USD'
    },
    postedDate: '2024-01-12',
    remote: true
  },
  {
    id: 'community-manager',
    title: 'Community Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'Join our team as a Community Manager to build and nurture our gaming community. You\'ll engage with players, manage social media presence, and help create a vibrant ecosystem around our games.',
    responsibilities: [
      'Manage and grow our social media presence across platforms',
      'Engage with community members and respond to feedback',
      'Create and curate content for social media and forums',
      'Organize community events and tournaments',
      'Collaborate with development team on community feedback',
      'Monitor community sentiment and report insights'
    ],
    requirements: [
      '2+ years of community management experience',
      'Strong social media and content creation skills',
      'Excellent written communication and interpersonal skills',
      'Experience with community platforms (Discord, Reddit, Twitter)',
      'Understanding of gaming culture and communities',
      'Ability to work flexible hours for global community'
    ],
    niceToHave: [
      'Experience in gaming industry community management',
      'Knowledge of content creation tools and video editing',
      'Familiarity with influencer and streamer outreach',
      'Experience with community analytics and reporting',
      'Multilingual capabilities'
    ],
    benefits: [
      'Competitive salary and performance incentives',
      'Remote work flexibility',
      'Social media and content creation tools',
      'Conference and networking opportunities',
      'Creative freedom in community initiatives',
      'Direct impact on player experience and engagement'
    ],
    salary: {
      min: 60000,
      max: 85000,
      currency: 'USD'
    },
    postedDate: '2024-01-05',
    remote: true
  }
];

export const departments = [
  'Engineering',
  'Design',
  'Art',
  'Quality Assurance',
  'Marketing',
  'Business Development',
  'Operations'
];

export const locations = [
  'Remote',
  'San Francisco, CA',
  'Los Angeles, CA',
  'Austin, TX',
  'Seattle, WA',
  'New York, NY'
];

export function getJobsByDepartment(department: string): JobPosting[] {
  if (department === 'all') return jobPostings;
  return jobPostings.filter(job => job.department === department);
}

export function getJobsByLocation(location: string): JobPosting[] {
  if (location === 'all') return jobPostings;
  return jobPostings.filter(job => job.location === location);
}

export function getJobById(id: string): JobPosting | undefined {
  return jobPostings.find(job => job.id === id);
}
