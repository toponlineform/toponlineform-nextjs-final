
import Link from 'next/link';
import { getByCategory } from '../data/jobsData';
import { Category } from '../types';

export const revalidate = 3600; // ISR: Revalidate every hour

export default function Home() {
  const resultPosts = getByCategory(Category.RESULT).slice(0, 10);
  const admitPosts = getByCategory(Category.ADMIT_CARD).slice(0, 10);
  const latestPosts = getByCategory(Category.LATEST_JOB).slice(0, 10);

  const categories = [
    { name: Category.RESULT, color: 'bg-red-800', data: resultPosts, path: '/results' },
    { name: Category.ADMIT_CARD, color: 'bg-blue-800', data: admitPosts, path: '/admit-card' },
    { name: Category.LATEST_JOB, color: 'bg-green-800', data: latestPosts, path: '/latest-jobs' },
  ];

  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TopOnlineForm",
    "url": "https://toponlineform.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://toponlineform.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* Main Grid Title Banner */}
      <div className="bg-yellow-400 text-blue-900 text-center py-6 rounded-t-lg shadow-md">
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-widest">
          Sarkari Result : TopOnlineForm.Com
        </h1>
        <p className="font-bold text-sm md:text-base mt-1">No.1 Government Jobs Education Portal</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-b border-gray-300 bg-white shadow-sm overflow-hidden">
        {categories.map((cat, idx) => (
          <div key={idx} className="border-r last:border-r-0 border-gray-300 flex flex-col">
            <div className={`${cat.color} text-white text-center py-4 font-bold uppercase tracking-wider text-lg`}>
              <Link href={cat.path} className="hover:underline">{cat.name}</Link>
            </div>
            <div className="flex-grow">
              <ul className="divide-y divide-gray-100">
                {cat.data.map((post) => (
                  <li key={post.id} className="p-4 hover:bg-yellow-50 transition-colors group">
                    <Link href={`/job/${post.id}`} className="flex items-start space-x-2">
                      <span className="text-blue-700 font-bold group-hover:text-red-700 text-sm md:text-base leading-snug">
                        {post.title}
                      </span>
                      {new Date(post.postDate).getTime() > Date.now() - 604800000 && (
                        <span className="bg-red-600 text-[10px] text-white px-1.5 py-0.5 rounded blink font-bold mt-1">NEW</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                <Link href={cat.path} className="text-blue-600 font-bold text-sm hover:underline uppercase">
                  View More {cat.name} »
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[Category.ANSWER_KEY, Category.SYLLABUS, Category.ADMISSION].map((catName) => {
          const posts = getByCategory(catName).slice(0, 5);
          return (
            <div key={catName} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
              <div className="bg-gray-800 text-white p-3 font-bold uppercase text-center">{catName}</div>
              <div className="p-4">
                <ul className="space-y-3">
                  {posts.length > 0 ? posts.map(post => (
                    <li key={post.id} className="border-b border-gray-100 pb-2 last:border-0">
                      <Link href={`/job/${post.id}`} className="text-blue-700 hover:text-red-700 text-sm font-medium">
                        • {post.title}
                      </Link>
                    </li>
                  )) : (
                    <li className="text-gray-400 text-sm text-center italic py-4">Coming Soon...</li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* 1000x SEO Content Section */}
      <section className="mt-12 prose prose-blue max-w-none bg-white p-8 rounded-lg border border-gray-200 shadow-md">
        <h2 className="text-2xl font-black text-gray-800 mb-6 uppercase border-b-2 border-yellow-400 inline-block">About TopOnlineForm - The Sarkari Result Portal</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Welcome to <strong>TopOnlineForm.com</strong>, your dedicated partner in the journey toward a successful government career. In today's competitive world, staying ahead requires the fastest and most accurate information. We pride ourselves on being a leading provider of <strong>Sarkari Result</strong>, <strong>Latest Govt Jobs</strong>, and <strong>Admit Card</strong> notifications across India.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Whether you are preparing for <strong>SSC CGL</strong>, <strong>RRB NTPC</strong>, <strong>UPSC</strong>, or state-level exams like <strong>UP Police</strong> and <strong>Bihar Teacher Recruitment</strong>, our portal is designed to give you instant access to official notifications, apply online links, and detailed syllabus information. Our team meticulously verifies every post to ensure you never fall victim to misinformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-900">
             <h4 className="font-bold text-blue-900 uppercase">Fastest Job Alerts</h4>
             <p className="text-sm text-gray-600">Get notified the second a new vacancy is released by SSC, Banking, or Railway boards.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
             <h4 className="font-bold text-yellow-900 uppercase">Candidate Utilities</h4>
             <p className="text-sm text-gray-600">Free access to Age Calculator, Image Resizers, and Resume Builders tailored for govt forms.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
