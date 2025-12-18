import React from 'react';
import Link from 'next/link';

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
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-tight">TOP ONLINE FORM</span>
              <span className="text-xs text-yellow-400 font-medium">www.toponlineform.com</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link href="/latest-jobs" className="hover:text-yellow-400 transition">Latest Jobs</Link>
              <Link href="/results" className="hover:text-yellow-400 transition">Results</Link>
              <Link href="/admit-card" className="hover:text-yellow-400 transition">Admit Card</Link>
              <Link href="/tools" className="hover:text-yellow-400 transition">Tools</Link>
            </nav>

            <button className="md:hidden text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
