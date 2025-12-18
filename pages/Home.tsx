
import React from 'react';
import { Link } from 'react-router-dom';
import { getByCategory } from '../data/jobsData';
import { Category } from '../types';
import SEO from '../components/SEO';

const Home: React.FC = () => {
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
    <div>
      <SEO 
        title="TopOnlineForm - Latest Govt Jobs, Sarkari Result, Admit Card 2024" 
        description="TopOnlineForm provides latest government jobs updates, Sarkari results, admit cards, answer keys and admission details. Get fast job alerts for SSC, Bank, Railway, UP Police and more." 
        keywords={['Sarkari Result', 'Latest Govt Jobs', 'Admit Card', 'Govt Jobs 2024', 'SSC GD', 'UP Police Result']}
        canonicalUrl="https://toponlineform.com/"
        schema={homepageSchema}
      />

      {/* Main Grid Title Banner */}
      <div className="bg-yellow-400 text-blue-900 text-center py-4 rounded-t-lg mb-0">
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-widest">
          Sarkari Result : TopOnlineForm.Com
        </h1>
        <p className="font-bold text-sm">No.1 Government Jobs Education Portal</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-b border-gray-300">
        {categories.map((cat, idx) => (
          <div key={idx} className="border-r last:border-r-0 border-gray-300 flex flex-col">
            <div className={`${cat.color} text-white text-center py-3 font-bold uppercase tracking-wider`}>
              <Link to={cat.path} className="hover:underline">{cat.name}</Link>
            </div>
            <div className="bg-white flex-grow">
              <ul className="divide-y divide-gray-100">
                {cat.data.map((post) => (
                  <li key={post.id} className="p-3 hover:bg-yellow-50 transition-colors group">
                    <Link to={`/job/${post.id}`} className="flex items-start space-x-2">
                      <span className="text-blue-700 font-medium group-hover:text-blue-900 text-sm leading-snug">
                        {post.title}
                      </span>
                      {new Date(post.postDate).getTime() > Date.now() - 604800000 && (
                        <span className="bg-red-600 text-[10px] text-white px-1 rounded animate-pulse font-bold">NEW</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-gray-50 text-center">
                <Link to={cat.path} className="text-blue-600 font-bold text-sm hover:underline">
                  View More {cat.name} »
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Important Sections (Horizontal Tables) */}
      <div className="mt-8 space-y-8">
        {[Category.ANSWER_KEY, Category.SYLLABUS, Category.ADMISSION].map((catName) => {
          const posts = getByCategory(catName).slice(0, 5);
          if (posts.length === 0) return null;
          return (
            <div key={catName} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-blue-900 text-white p-3 font-bold uppercase">{catName}</div>
              <div className="bg-white p-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {posts.map(post => (
                       <Link key={post.id} to={`/job/${post.id}`} className="text-blue-700 hover:text-red-700 text-sm border-b pb-1">
                          • {post.title}
                       </Link>
                    ))}
                 </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SEO Content Section */}
      <section className="mt-12 prose prose-blue max-w-none bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Why Choose TopOnlineForm?</h2>
        <p className="text-gray-600 text-sm">
          TopOnlineForm is India's most trusted portal for government job notifications. We understand the struggle of job seekers in finding authentic information. Whether you are looking for <strong>SSC GD Constable</strong>, <strong>Railway ALP</strong>, <strong>UP Police Constable</strong>, or <strong>Banking jobs</strong>, we provide accurate and timely updates. Our mission is to simplify the recruitment process by providing structured data, direct apply links, and comprehensive toolsets like Age Calculators and Resume Builders.
        </p>
      </section>
    </div>
  );
};

export default Home;
