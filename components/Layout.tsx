
import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-red-700 text-white text-center py-2 text-sm font-bold animate-pulse">
        JOIN OUR WHATSAPP CHANNEL FOR INSTANT JOB UPDATES!
      </div>

      {/* Navigation */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-tight">TOP ONLINE FORM</span>
              <span className="text-xs text-yellow-400 font-medium">www.toponlineform.com</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link to="/latest-jobs" className="hover:text-yellow-400 transition">Latest Jobs</Link>
              <Link to="/results" className="hover:text-yellow-400 transition">Results</Link>
              <Link to="/admit-card" className="hover:text-yellow-400 transition">Admit Card</Link>
              <Link to="/tools" className="hover:text-yellow-400 transition">Tools</Link>
            </nav>

            <button className="md:hidden text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Quick Links Row */}
      <div className="bg-blue-800 text-white py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-4 flex space-x-8 text-sm uppercase">
          <Link to="/" className="hover:text-yellow-300">UP Exam</Link>
          <Link to="/" className="hover:text-yellow-300">SSC</Link>
          <Link to="/" className="hover:text-yellow-300">Bank</Link>
          <Link to="/" className="hover:text-yellow-300">Railway</Link>
          <Link to="/" className="hover:text-yellow-300">Police</Link>
          <Link to="/" className="hover:text-yellow-300">Army</Link>
          <Link to="/" className="hover:text-yellow-300">TGT PGT</Link>
          <Link to="/" className="hover:text-yellow-300">UPSSSC</Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">TopOnlineForm</h3>
            <p className="text-sm leading-relaxed mb-4">
              TopOnlineForm is a one-stop destination for all your government job needs. We provide the latest updates on Sarkari Result, Admit Card, Answer Key, Syllabus, Admission, and various online forms. Stay updated with us for the fastest job notifications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-blue-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-xl hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl hover:text-blue-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-xl hover:text-blue-400"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase">Important Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/latest-jobs" className="hover:text-white transition">Latest Jobs</Link></li>
              <li><Link to="/results" className="hover:text-white transition">Sarkari Result</Link></li>
              <li><Link to="/admit-card" className="hover:text-white transition">Admit Card</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase">Candidate Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools/age-calculator" className="hover:text-white transition">Age Calculator</Link></li>
              <li><Link to="/tools/typing-test" className="hover:text-white transition">Typing Test</Link></li>
              <li><Link to="/tools/resume-builder" className="hover:text-white transition">Resume Builder</Link></li>
              <li><Link to="/" className="hover:text-white transition">Photo/Sign Resizer</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 border-t border-gray-800 mt-8 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} toponlineform.com. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
