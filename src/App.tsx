import React, { useState, useRef } from 'react';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  GraduationCap,
  Heart,
  Send,
  CheckCircle
} from 'lucide-react';
import emailjs from 'emailjs-com';

function App() {
  const [tournamentForm, setTournamentForm] = useState({
    schoolName: '',
    schoolAddress: '',
    principalName: '',
    coachName: '',
    coachPhone: '',
    coachEmail: '',
    student1Name: '',
    student1Class: '',
    student2Name: '',
    student2Class: ''
  });

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    tournament: '',
    volunteer: '',
    contact: ''
  });

  const tournamentFormRef = useRef<HTMLFormElement>(null);
  const volunteerFormRef = useRef<HTMLFormElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);

  const handleTournamentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      ...tournamentForm,
      form_type: 'Tournament Registration'
    };

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    ).then(() => {
      setSubmissionStatus(prev => ({ ...prev, tournament: 'success' }));
      setTournamentForm({
        schoolName: '',
        schoolAddress: '',
        principalName: '',
        coachName: '',
        coachPhone: '',
        coachEmail: '',
        student1Name: '',
        student1Class: '',
        student2Name: '',
        student2Class: ''
      });
    }).catch(() => {
      setSubmissionStatus(prev => ({ ...prev, tournament: 'error' }));
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      ...volunteerForm,
      form_type: 'Volunteer Registration'
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    ).then(() => {
      setSubmissionStatus(prev => ({ ...prev, volunteer: 'success' }));
      setVolunteerForm({
        name: '',
        email: '',
        phone: '',
        skills: '',
        availability: ''
      });
    }).catch(() => {
      setSubmissionStatus(prev => ({ ...prev, volunteer: 'error' }));
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      ...contactForm,
      form_type: 'Contact Form'
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    ).then(() => {
      setSubmissionStatus(prev => ({ ...prev, contact: 'success' }));
      setContactForm({
        name: '',
        email: '',
        message: ''
      });
    }).catch(() => {
      setSubmissionStatus(prev => ({ ...prev, contact: 'error' }));
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/igf loco.jpg" 
                alt="Igiehon Foundation Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800">Igiehon Foundation</span>
                <span className="text-xs text-amber-600 font-medium -mt-1">in pursuit of excellence & heritage</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-red-800 transition-colors">Home</a>
              <a href="#about" className="text-slate-700 hover:text-red-800 transition-colors">About</a>
              <a href="#tournament" className="text-slate-700 hover:text-red-800 transition-colors">Tournament</a>
              <a href="#volunteer" className="text-slate-700 hover:text-red-800 transition-colors">Volunteer</a>
              <a href="#contact" className="text-slate-700 hover:text-red-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Fostering Academic 
              <span className="text-red-800 block">Excellence in Nigeria</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Supporting secondary school students and teachers across Nigeria through our annual mathematics tournament 
              and educational initiatives. Join us in building the next generation of leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#tournament" 
                className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Register for Tournament
              </a>
              <a 
                href="#volunteer" 
                className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold border-2 border-red-800 hover:bg-red-800 hover:text-white transition-all duration-300"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-xl text-slate-600">Empowering education through innovative programs and competitions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Academic Support</h3>
              <p className="text-slate-600">
                Providing resources and support to secondary school students and teachers to enhance learning outcomes.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Math Tournament</h3>
              <p className="text-slate-600">
                Annual mathematics competition bringing together the brightest minds from across Edo State.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Community Building</h3>
              <p className="text-slate-600">
                Creating networks of educators and students passionate about academic excellence and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students studying mathematics"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Igiehon Foundation</h2>
              <p className="text-lg text-slate-600 mb-6">
                Igiehon Foundation is dedicated to fostering academic excellence in Nigeria by supporting 
                secondary school students and teachers. Our mission is to create opportunities for young 
                minds to excel and reach their full potential.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Through our annual mathematics tournament and various educational initiatives, we aim to 
                inspire a love for learning and help shape the future leaders of Nigeria.
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">4th Annual Math Tournament</h3>
                <div className="flex items-center text-slate-700 mb-2">
                  <Calendar className="h-5 w-5 mr-3 text-red-800" />
                  <span>November 29th, 2025</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <MapPin className="h-5 w-5 mr-3 text-red-800" />
                  <span>SIO Event Center, Benin City</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-red-800">500+</div>
                  <div className="text-slate-600">Students Supported</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-amber-600">50+</div>
                  <div className="text-slate-600">Schools Participating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Registration Section */}
      <section id="tournament" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tournament Registration</h2>
            <p className="text-xl text-slate-600">Register your school team for the 4th Annual Math Tournament</p>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-red-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Eligibility Criteria</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                Open to all Senior Secondary Schools in Edo State
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                All participants must be current Senior Secondary Students
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                Teams consist of two (2) students from any class or department
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                Teams must identify a teacher coach at registration
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                Competition includes written test (Initial Round) and oral segment (Finals)
              </li>
            </ul>
          </div>

          {/* Registration Form */}
          <form ref={tournamentFormRef} onSubmit={handleTournamentSubmit} className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">School Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">School Name</label>
                  <input
                    type="text"
                    value={tournamentForm.schoolName}
                    onChange={(e) => setTournamentForm({...tournamentForm, schoolName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">School Address</label>
                  <input
                    type="text"
                    value={tournamentForm.schoolAddress}
                    onChange={(e) => setTournamentForm({...tournamentForm, schoolAddress: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Principal's Name</label>
                  <input
                    type="text"
                    value={tournamentForm.principalName}
                    onChange={(e) => setTournamentForm({...tournamentForm, principalName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Coach Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Coach Name</label>
                  <input
                    type="text"
                    value={tournamentForm.coachName}
                    onChange={(e) => setTournamentForm({...tournamentForm, coachName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Coach Phone</label>
                  <input
                    type="tel"
                    value={tournamentForm.coachPhone}
                    onChange={(e) => setTournamentForm({...tournamentForm, coachPhone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Coach Email</label>
                  <input
                    type="email"
                    value={tournamentForm.coachEmail}
                    onChange={(e) => setTournamentForm({...tournamentForm, coachEmail: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Student Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-4">Student 1</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={tournamentForm.student1Name}
                        onChange={(e) => setTournamentForm({...tournamentForm, student1Name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Class</label>
                      <select
                        value={tournamentForm.student1Class}
                        onChange={(e) => setTournamentForm({...tournamentForm, student1Class: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        required
                      >
                        <option value="">Select Class</option>
                        <option value="SS1">SS1</option>
                        <option value="SS2">SS2</option>
                        <option value="SS3">SS3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-4">Student 2</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={tournamentForm.student2Name}
                        onChange={(e) => setTournamentForm({...tournamentForm, student2Name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Class</label>
                      <select
                        value={tournamentForm.student2Class}
                        onChange={(e) => setTournamentForm({...tournamentForm, student2Class: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        required
                      >
                        <option value="">Select Class</option>
                        <option value="SS1">SS1</option>
                        <option value="SS2">SS2</option>
                        <option value="SS3">SS3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {submissionStatus.tournament === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                  <p className="text-green-800">Tournament registration submitted successfully!</p>
                </div>
              </div>
            )}

            {submissionStatus.tournament === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">Error submitting registration. Please try again.</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors text-lg"
            >
              Register Team
            </button>
          </form>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Become a Volunteer</h2>
            <p className="text-xl text-slate-600">Join our mission to support academic excellence in Nigeria</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src="https://images.pexels.com/photos/6543911/pexels-photo-6543911.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Volunteers helping students"
                className="rounded-xl shadow-lg"
              />
              <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Volunteer?</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    Make a direct impact on students' lives
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-red-800 mt-0.5 mr-3 flex-shrink-0" />
                    Build meaningful connections in education
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    Contribute to academic excellence
                  </li>
                </ul>
              </div>
            </div>

            <form ref={volunteerFormRef} onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={volunteerForm.email}
                  onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={volunteerForm.phone}
                  onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Skills & Experience</label>
                <textarea
                  value={volunteerForm.skills}
                  onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="Tell us about your relevant skills, experience, or expertise..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                <select
                  value={volunteerForm.availability}
                  onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                >
                  <option value="">Select Availability</option>
                  <option value="tournament-day">Tournament Day Only</option>
                  <option value="preparation">Preparation Period</option>
                  <option value="ongoing">Ongoing Support</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {submissionStatus.volunteer === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                    <p className="text-green-800">Volunteer application submitted successfully!</p>
                  </div>
                </div>
              )}

              {submissionStatus.volunteer === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">Error submitting application. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-lg flex items-center justify-center"
              >
                <Heart className="h-5 w-5 mr-2" />
                Join as Volunteer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join us in fostering academic excellence and shaping the future of education in Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#tournament" 
              className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Your School
            </a>
            <a 
              href="#volunteer" 
              className="bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-950 transition-colors border-2 border-red-900"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-600">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">F19, Lekki Square Mall, Lekki, Lagos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">info@igiehonfoundation.org</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-red-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Tournament Venue</h3>
                <div className="flex items-center text-slate-700 mb-2">
                  <Calendar className="h-5 w-5 mr-3 text-red-800" />
                  <span>November 29th, 2025</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <MapPin className="h-5 w-5 mr-3 text-red-800" />
                  <span>SIO Event Center, Benin City</span>
                </div>
              </div>
            </div>

            <form ref={contactFormRef} onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              {submissionStatus.contact === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                    <p className="text-green-800">Message sent successfully!</p>
                  </div>
                </div>
              )}

              {submissionStatus.contact === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">Error sending message. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors text-lg flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/igf loco.jpg" 
                  alt="Igiehon Foundation Logo" 
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Igiehon Foundation</span>
                  <span className="text-xs text-amber-400 font-medium -mt-1">in pursuit of excellence & heritage</span>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Fostering academic excellence in Nigeria through education support and mathematics competitions.
              </p>
              <p className="text-slate-400 text-sm">
                F19, Lekki Square Mall, Lekki, Lagos
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#tournament" className="hover:text-white transition-colors">Tournament</a></li>
                <li><a href="#volunteer" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Igiehon Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;