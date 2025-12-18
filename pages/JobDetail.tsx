
import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Fix: Added getByCategory to the imports from jobsData
import { getJobById, getByCategory } from '../data/jobsData';
import SEO from '../components/SEO';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = getJobById(id || '');

  if (!job) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  const jobSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.shortInfo,
    "datePosted": job.postDate,
    "validThrough": job.lastDate,
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "TopOnlineForm",
      "sameAs": "https://toponlineform.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "India",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SEO 
        title={`${job.title} - Apply Online Form 2024`}
        description={job.shortInfo}
        keywords={[...job.tags, 'online form', 'govt job', 'vacancy']}
        canonicalUrl={`https://toponlineform.com/#/job/${job.id}`}
        schema={jobSchema}
      />

      {/* Breadcrumb */}
      <nav className="flex text-gray-500 text-xs mb-4 uppercase font-bold" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{job.title}</span>
      </nav>

      {/* Job Card */}
      <article className="bg-white border-4 border-blue-900 rounded shadow-2xl overflow-hidden">
        <header className="bg-blue-900 text-white p-6 text-center">
          <h1 className="text-xl md:text-3xl font-black uppercase mb-2">{job.title}</h1>
          <p className="text-yellow-400 font-bold uppercase tracking-wider">TopOnlineForm.com</p>
        </header>

        <div className="p-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <h2 className="font-bold text-red-700 mb-1 uppercase">Short Information:</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{job.shortInfo}</p>
          </div>

          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-blue-100">
                <th colSpan={2} className="border border-gray-300 p-3 text-center text-blue-900 font-bold uppercase">Important Dates & Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 w-1/2">
                  <h3 className="font-bold text-blue-800 text-sm uppercase mb-2">Important Dates</h3>
                  <ul className="text-sm space-y-1">
                    <li><span className="font-semibold">Post Date:</span> {job.postDate}</li>
                    <li><span className="font-semibold text-red-600">Last Date:</span> {job.lastDate}</li>
                  </ul>
                </td>
                <td className="border border-gray-300 p-3 w-1/2">
                  <h3 className="font-bold text-blue-800 text-sm uppercase mb-2">Application Fee</h3>
                  <ul className="text-sm space-y-1">
                    {job.applicationFee ? Object.entries(job.applicationFee).map(([key, val]) => (
                      <li key={key}><span className="font-semibold">{key}:</span> {val}</li>
                    )) : <li>No Fee Data Available</li>}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="w-full border-collapse mb-8">
            <thead>
               <tr className="bg-blue-100">
                  <th colSpan={2} className="border border-gray-300 p-3 text-center text-blue-900 font-bold uppercase">Age Limit & Eligibility</th>
               </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 w-1/2">
                   <h3 className="font-bold text-blue-800 text-sm uppercase mb-2">Age Limit</h3>
                   <p className="text-sm">{job.ageLimit || 'As per notification'}</p>
                </td>
                <td className="border border-gray-300 p-3 w-1/2">
                   <h3 className="font-bold text-blue-800 text-sm uppercase mb-2">Post Details</h3>
                   <p className="text-sm"><span className="font-bold">Total Posts:</span> {job.totalPosts || 'N/A'}</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-gray-300 p-3">
                   <h3 className="font-bold text-blue-800 text-sm uppercase mb-2">Eligibility Criteria</h3>
                   <ul className="list-disc list-inside text-sm space-y-1">
                      {job.eligibility?.map((item, idx) => <li key={idx}>{item}</li>)}
                   </ul>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Action Links */}
          <div className="mt-10">
             <h2 className="bg-red-700 text-white p-3 font-bold text-center uppercase mb-4">Important Links</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href={job.applyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded text-center shadow transition-all transform hover:-translate-y-1"
                >
                  APPLY ONLINE NOW <i className="fas fa-external-link-alt ml-2"></i>
                </a>
                <a 
                  href="#" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold p-4 rounded text-center shadow transition-all transform hover:-translate-y-1"
                >
                  DOWNLOAD NOTIFICATION <i className="fas fa-download ml-2"></i>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-black text-white font-bold p-4 rounded text-center shadow transition-all transform hover:-translate-y-1 md:col-span-2"
                >
                  OFFICIAL WEBSITE <i className="fas fa-globe ml-2"></i>
                </a>
             </div>
          </div>
        </div>

        <footer className="bg-gray-50 p-6 border-t border-gray-200">
           <p className="text-xs text-center text-gray-500 italic">
              Disclaimer: The recruitment information on this website is only for informational purposes. Candidates must refer to the official notification for complete details.
           </p>
        </footer>
      </article>

      {/* Recommended Jobs */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4 uppercase text-blue-900 border-b-2 border-blue-900 pb-2">Recommended Jobs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* getByCategory is now imported from ../data/jobsData */}
          {getByCategory(job.category).filter(p => p.id !== job.id).slice(0, 4).map(recJob => (
            <Link key={recJob.id} to={`/job/${recJob.id}`} className="bg-white p-4 border border-gray-200 rounded hover:shadow-md transition">
              <span className="text-blue-700 font-bold block">{recJob.title}</span>
              <span className="text-xs text-gray-500">Post Date: {recJob.postDate}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
