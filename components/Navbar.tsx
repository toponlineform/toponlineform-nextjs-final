
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-red-700 text-white text-center py-2 text-sm font-bold animate-pulse">
        JOIN OUR WHATSAPP CHANNEL FOR INSTANT JOB UPDATES!
      </div>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-tight">TOP ONLINE FORM</span>
              <span className="text-xs text-yellow-400 font-medium">www.toponlineform.com</span>
            </Link>
            
            <div className="hidden md:flex space-x-6 uppercase font-bold text-sm">
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link href="/latest-jobs" className="hover:text-yellow-400 transition">Latest Jobs</Link>
              <Link href="/results" className="hover:text-yellow-400 transition">Results</Link>
              <Link href="/admit-card" className="hover:text-yellow-400 transition">Admit Card</Link>
              <Link href="/tools" className="hover:text-yellow-400 transition">Tools</Link>
            </div>

            <button className="md:hidden text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Quick Links Row */}
      <div className="bg-blue-800 text-white py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-4 flex space-x-8 text-sm uppercase font-semibold">
          <Link href="/" className="hover:text-yellow-300">UP Exam</Link>
          <Link href="/" className="hover:text-yellow-300">SSC</Link>
          <Link href="/" className="hover:text-yellow-300">Bank</Link>
          <Link href="/" className="hover:text-yellow-300">Railway</Link>
          <Link href="/" className="hover:text-yellow-300">Police</Link>
          <Link href="/" className="hover:text-yellow-300">Army</Link>
          <Link href="/" className="hover:text-yellow-300">TGT PGT</Link>
          <Link href="/" className="hover:text-yellow-300">UPSSSC</Link>
        </div>
      </div>
    </header>
  );
}
