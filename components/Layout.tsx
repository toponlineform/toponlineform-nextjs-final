import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // पक्का करें कि Footer.tsx फाइल भी मौजूद है

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* यहाँ हमने Navbar को कॉल किया */}
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
