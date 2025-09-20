'use client';

import { useState, useMemo } from 'react';
import { jobPostings, departments, locations, type JobPosting } from '@/lib/careers-data';
import { ChevronDownIcon, ChevronUpIcon, MapPinIcon, ClockIcon, CurrencyDollarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

interface JobAccordionProps {
  job: JobPosting;
  isOpen: boolean;
  onToggle: () => void;
}

function JobAccordion({ job, isOpen, onToggle }: JobAccordionProps) {
  const formatSalary = (salary: JobPosting['salary']) => {
    if (!salary) return 'Competitive';
    return `$${salary.min.toLocaleString()} - $${salary.max.toLocaleString()} ${salary.currency}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
      {/* Job Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-slate-700/30 transition-colors duration-200 focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-xl font-semibold text-white">{job.title}</h3>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                {job.department}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" />
                <span>{job.location}</span>
                {job.remote && <span className="text-green-400">(Remote)</span>}
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <BuildingOfficeIcon className="w-4 h-4" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-1">
                <CurrencyDollarIcon className="w-4 h-4" />
                <span>{formatSalary(job.salary)}</span>
              </div>
            </div>
          </div>
          
          <div className="ml-4">
            {isOpen ? (
              <ChevronUpIcon className="w-6 h-6 text-gray-400" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-gray-400" />
            )}
          </div>
        </div>
      </button>

      {/* Job Details */}
      {isOpen && (
        <div className="px-6 pb-6 border-t border-slate-700/50">
          <div className="pt-6 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">About This Role</h4>
              <p className="text-gray-300 leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            {job.niceToHave.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Nice to Have</h4>
                <ul className="space-y-2">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">What We Offer</h4>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Info */}
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-gray-400">
                  <p>Posted: {formatDate(job.postedDate)}</p>
                  {job.applicationDeadline && (
                    <p>Application Deadline: {formatDate(job.applicationDeadline)}</p>
                  )}
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 focus:outline-none">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CareersContent() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return jobPostings.filter(job => {
      const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      const matchesType = selectedType === 'all' || job.type === selectedType;
      
      return matchesDepartment && matchesLocation && matchesType;
    });
  }, [selectedDepartment, selectedLocation, selectedType]);

  const handleJobToggle = (jobId: string) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 font-orbitron">
          Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Team</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Help us create the next generation of epic RPG games. We're looking for passionate, 
          creative individuals who want to make their mark in the gaming industry.
        </p>
        
        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="text-lg font-semibold text-white mb-2">Passion for Gaming</h3>
            <p className="text-gray-400 text-sm">We're gamers first, developers second. Our love for gaming drives everything we do.</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-400 text-sm">We push boundaries and explore new technologies to create unique gaming experiences.</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
            <p className="text-gray-400 text-sm">Great games are made by great teams. We value diverse perspectives and inclusive culture.</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">
              Department
            </label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
              Location
            </label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none"
            >
              <option value="all">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">
              Job Type
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none"
            >
              <option value="all">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedDepartment('all');
                setSelectedLocation('all');
                setSelectedType('all');
              }}
              className="w-full px-4 py-2 bg-slate-600/50 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors duration-200 focus:outline-none"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-300">
          Showing {filteredJobs.length} of {jobPostings.length} open positions
        </p>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <JobAccordion
            key={job.id}
            job={job}
            isOpen={openJobId === job.id}
            onToggle={() => handleJobToggle(job.id)}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
          <p className="text-gray-400 mb-4">
            Try adjusting your filters or check back later for new opportunities.
          </p>
          <button
            onClick={() => {
              setSelectedDepartment('all');
              setSelectedLocation('all');
              setSelectedType('all');
            }}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            View All Positions
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
        <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Perfect Role?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. 
          Send us your resume and let us know how you'd like to contribute to our mission.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 focus:outline-none">
          Send General Application
        </button>
      </div>
    </div>
  );
}