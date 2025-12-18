
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">TopOnlineForm</h3>
          <p className="text-sm leading-relaxed mb-4">
            TopOnlineForm is a one-stop destination for all your government job needs. We provide the latest updates on Sarkari Result, Admit Card, Answer Key, Syllabus, Admission, and various online forms. Stay updated with us for the fastest job notifications.
          </p>
          <div className="flex space-x-4">
            <span className="text-xl hover:text-blue-400 cursor-pointer"><i className="fab fa-facebook"></i></span>
            <span className="text-xl hover:text-blue-400 cursor-pointer"><i className="fab fa-twitter"></i></span>
            <span className="text-xl hover:text-blue-400 cursor-pointer"><i className="fab fa-instagram"></i></span>
            <span className="text-xl hover:text-blue-400 cursor-pointer"><i className="fab fa-telegram"></i></span>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase">Important Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/latest-jobs" className="hover:text-white transition">Latest Jobs</Link></li>
            <li><Link href="/results" className="hover:text-white transition">Sarkari Result</Link></li>
            <li><Link href="/admit-card" className="hover:text-white transition">Admit Card</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase">Candidate Tools</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/tools" className="hover:text-white transition">Age Calculator</Link></li>
            <li><Link href="/tools" className="hover:text-white transition">Typing Test</Link></li>
            <li><Link href="/tools" className="hover:text-white transition">Resume Builder</Link></li>
            <li><Link href="/" className="hover:text-white transition">Photo/Sign Resizer</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 border-t border-gray-800 mt-8 pt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} toponlineform.com. All Rights Reserved.
      </div>
    </footer>
  );
}
