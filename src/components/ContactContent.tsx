'use client';

import { useState, useEffect } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  BugAntIcon,
  BriefcaseIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { 
  FaTwitter, 
  FaDiscord, 
  FaLinkedin,
  FaGamepad,
  FaRocket
} from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
  attachments?: FileList;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactContent() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: '',
    priority: 'medium'
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('form');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { value: 'general', label: 'General Inquiry', icon: QuestionMarkCircleIcon },
    { value: 'support', label: 'Technical Support', icon: ChatBubbleLeftRightIcon },
    { value: 'bug', label: 'Bug Report', icon: BugAntIcon },
    { value: 'business', label: 'Business Partnership', icon: BriefcaseIcon },
    { value: 'feedback', label: 'Game Feedback', icon: EnvelopeIcon }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you'd make an API call here
      console.log('Contact form submission:', formData);
      
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: '',
        priority: 'medium'
      });
    } catch (err) {
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      content: 'hello@deckerdanis.com',
      description: 'Send us an email anytime',
      action: 'mailto:hello@deckerdanis.com'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      content: '+1 (555) DECKER',
      description: 'Mon-Fri 9AM-6PM PST',
      action: 'tel:+1-555-332537'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: 'By appointment only',
      action: null
    },
    {
      icon: ClockIcon,
      title: 'Response Time',
      content: '24-48 hours',
      description: 'Average response time',
      action: null
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/deckerdanis', color: 'hover:text-blue-400' },
    { name: 'Discord', icon: FaDiscord, url: 'https://discord.gg/deckerdanis', color: 'hover:text-indigo-400' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/company/deckerdanis', color: 'hover:text-blue-500' }
  ];

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 shadow-2xl transform transition-all duration-500 animate-in slide-in-from-bottom-4">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
              <CheckCircleIcon className="w-24 h-24 text-green-400 mx-auto relative animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6 font-orbitron bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Message Sent Successfully!
            </h1>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Thank you for reaching out to us. We've received your message and will get back to you within 24-48 hours.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 focus:outline-none"
              >
                Send Another Message
              </button>
              <div className="text-sm text-gray-400">
                <p>Reference ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`container mx-auto px-4 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Header */}
      <div className="text-center mb-16">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-3xl rounded-full"></div>
          <h1 className="text-6xl font-bold text-white mb-6 font-orbitron relative">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">Touch</span>
          </h1>
        </div>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Have a question, feedback, or want to collaborate? We'd love to hear from you. 
          Our team is here to help and we typically respond within 24-48 hours.
        </p>
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-slate-800/30 px-4 py-2 rounded-full border border-slate-700/50">
            <SparklesIcon className="w-4 h-4 text-yellow-400" />
            <span>Powered by AI-assisted support</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-500/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white font-orbitron">Contact Information</h2>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = info.action ? (
                  <a href={info.action} className="hover:text-purple-400 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <span>{info.content}</span>
                );
                
                return (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300 cursor-pointer">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors">{info.title}</h3>
                      <div className="text-gray-300 font-medium group-hover:text-white transition-colors">{content}</div>
                      <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                <FaRocket className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white font-orbitron">Follow Our Journey</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">Stay updated with our latest games, updates, and behind-the-scenes content.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-600/50 hover:to-slate-700/50 hover:scale-110 hover:shadow-lg border border-slate-600/30 hover:border-purple-500/50`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-500/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white font-orbitron">Send us a Message</h2>
            </div>
            <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you as soon as possible. All fields marked with * are required.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                    <span>Full Name</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-slate-700/70 ${
                        errors.name ? 'border-red-500' : 'border-slate-600/50'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formData.name && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                    <span>Email Address</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-slate-700/70 ${
                        errors.email ? 'border-red-500' : 'border-slate-600/50'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {formData.email && formData.email.includes('@') && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Category and Priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-300 mb-3">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none transition-all duration-300 hover:bg-slate-700/70 appearance-none cursor-pointer"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value} className="bg-slate-800">{cat.label}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-semibold text-gray-300 mb-3">
                    Priority
                  </label>
                  <div className="relative">
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none transition-all duration-300 hover:bg-slate-700/70 appearance-none cursor-pointer"
                    >
                      <option value="low" className="bg-slate-800">🔵 Low Priority</option>
                      <option value="medium" className="bg-slate-800">🟡 Medium Priority</option>
                      <option value="high" className="bg-slate-800">🔴 High Priority</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <span>Subject</span>
                  <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-slate-700/70 ${
                      errors.subject ? 'border-red-500' : 'border-slate-600/50'
                    }`}
                    placeholder="Brief description of your inquiry"
                  />
                  {formData.subject && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    </div>
                  )}
                </div>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <span>Message</span>
                  <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-slate-700/70 resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-slate-600/50'
                    }`}
                    placeholder="Please provide details about your inquiry..."
                  />
                  {formData.message && formData.message.length > 10 && (
                    <div className="absolute right-3 top-4">
                      <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    </div>
                  )}
                </div>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
                <p className="text-gray-400 text-sm mt-1">
                  {formData.message.length}/1000 characters
                </p>
              </div>

              {/* Submit Error */}
              {submitError && (
                <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/50 rounded-xl p-4 backdrop-blur-sm animate-pulse">
                  <div className="flex items-center gap-3">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 font-medium">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-700 hover:via-purple-800 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="relative z-10">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <EnvelopeIcon className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <QuestionMarkCircleIcon className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-300 text-lg">Quick answers to common questions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg border border-red-500/30">
                <BugAntIcon className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">How can I report a bug?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Select "Bug Report" as your category and provide detailed steps to reproduce the issue, 
                  including your system specifications and any error messages.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg border border-blue-500/30">
                <BriefcaseIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Do you offer partnerships?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes! We're always interested in collaborating with other developers, publishers, 
                  and content creators. Choose "Business Partnership" to get started.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg border border-green-500/30">
                <ClockIcon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">How long until I get a response?</h3>
                <p className="text-gray-400 leading-relaxed">
                  We typically respond within 24-48 hours. High priority issues are addressed first, 
                  followed by business inquiries and general questions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg border border-yellow-500/30">
                <FaGamepad className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">Can I suggest game features?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Absolutely! We love hearing from our community. Use the "Game Feedback" category 
                  to share your ideas and suggestions for current or future games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}