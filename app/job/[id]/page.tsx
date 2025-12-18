
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJobById, getByCategory, JOB_POSTS } from '../../../data/jobsData';

interface Props {
  params: Promise<{ id: string }>;
}

// SSG: Pre-render all job pages
export async function generateStaticParams() {
  return JOB_POSTS.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) return { title: 'Job Not Found' };

  return {
    title: `${job.title} - Apply Online Form 2024`,
    description: `${job.shortInfo} Get full details of eligibility, age limit, application fee and apply link for ${job.title} at TopOnlineForm.`,
    keywords: [...job.tags, 'Apply Online', 'Sarkari Result', 'Job Vacancy'],
    openGraph: {
      title: job.title,
      description: job.shortInfo,
      url: `https://toponlineform.com/job/${job.id}`,
    }
  };
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) notFound();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="flex text-gray-500 text-xs mb-6 uppercase font-bold" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 truncate">{job.title}</span>
      </nav>

      {/* Job Card */}
      <article className="bg-white border-4 border-blue-900 rounded shadow-2xl overflow-hidden">
        <header className="bg-blue-900 text-white p-6 md:p-8 text-center">
          <h1 className="text-xl md:text-3xl font-black uppercase mb-3 leading-tight">{job.title}</h1>
          <p className="text-yellow-400 font-bold uppercase tracking-widest text-lg">TopOnlineForm.com</p>
        </header>

        <div className="p-6 md:p-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 mb-8 rounded-r">
            <h2 className="font-bold text-red-700 mb-2 uppercase text-lg border-b border-yellow-200 pb-1">Short Information:</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{job.shortInfo}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-8 min-w-[500px]">
              <thead>
                <tr className="bg-blue-100">
                  <th colSpan={2} className="border border-gray-300 p-4 text-center text-blue-900 font-black uppercase text-lg">Important Dates & Application Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-5 w-1/2 align-top">
                    <h3 className="font-bold text-red-600 text-sm uppercase mb-3 underline">Important Dates</h3>
                    <ul className="text-sm md:text-base space-y-2">
                      <li><span className="font-bold text-gray-800">Application Start:</span> {job.postDate}</li>
                      <li><span className="font-black text-red-700">Last Date for Apply:</span> {job.lastDate}</li>
                      <li><span className="font-bold text-gray-800">Exam Date:</span> Notify Soon</li>
                      <li><span className="font-bold text-gray-800">Admit Card:</span> Before Exam</li>
                    </ul>
                  </td>
                  <td className="border border-gray-300 p-5 w-1/2 align-top">
                    <h3 className="font-bold text-blue-800 text-sm uppercase mb-3 underline">Application Fee</h3>
                    <ul className="text-sm md:text-base space-y-2">
                      {job.applicationFee ? Object.entries(job.applicationFee).map(([key, val]) => (
                        <li key={key}><span className="font-bold text-gray-800">{key}:</span> {val}</li>
                      )) : <li>Check Official Notification</li>}
                      <li className="text-xs text-gray-500 mt-2 italic">Pay through Debit Card, Credit Card, Net Banking Mode Only.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-8 min-w-[500px]">
              <thead>
                <tr className="bg-blue-100">
                  <th colSpan={2} className="border border-gray-300 p-4 text-center text-blue-900 font-black uppercase text-lg">Age Limit & Eligibility Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-5 w-1/2 align-top">
                    <h3 className="font-bold text-blue-800 text-sm uppercase mb-3 underline">Age Limit (as on {job.lastDate})</h3>
                    <p className="text-sm md:text-base font-bold text-gray-800">{job.ageLimit || 'As per Rules'}</p>
                    <p className="text-xs text-gray-500 mt-2 italic">Age relaxation extra as per recruitment rules.</p>
                  </td>
                  <td className="border border-gray-300 p-5 w-1/2 align-top">
                    <h3 className="font-bold text-blue-800 text-sm uppercase mb-3 underline">Vacancy Details</h3>
                    <p className="text-sm md:text-base font-black text-green-700">Total Posts: {job.totalPosts || 'N/A'}</p>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan={2} className="border border-gray-300 p-5">
                    <h3 className="font-bold text-blue-900 text-sm uppercase mb-3 underline">Eligibility Criteria</h3>
                    <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-gray-800 font-medium">
                      {job.eligibility?.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Links Table */}
          <div className="mt-12">
            <div className="bg-red-700 text-white p-4 font-black text-center uppercase text-xl shadow-lg mb-0">
              Important Link Section
            </div>
            <table className="w-full border-collapse border border-gray-300 shadow-lg">
              <tbody>
                <tr className="bg-white hover:bg-yellow-50">
                  <td className="border border-gray-300 p-4 font-bold text-blue-900 w-1/2">Apply Online</td>
                  <td className="border border-gray-300 p-4">
                    <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded font-black hover:bg-blue-700 transition uppercase shadow block text-center">
                      Click Here <i className="fas fa-hand-point-right ml-2"></i>
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-yellow-50">
                  <td className="border border-gray-300 p-4 font-bold text-blue-900">Download Notification</td>
                  <td className="border border-gray-300 p-4">
                    <button className="bg-red-600 text-white px-6 py-2 rounded font-black hover:bg-red-700 transition uppercase shadow block w-full text-center">
                      Download PDF <i className="fas fa-file-pdf ml-2"></i>
                    </button>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-yellow-50">
                  <td className="border border-gray-300 p-4 font-bold text-blue-900">Official Website</td>
                  <td className="border border-gray-300 p-4">
                    <button className="bg-gray-800 text-white px-6 py-2 rounded font-black hover:bg-black transition uppercase shadow block w-full text-center">
                      Official Link <i className="fas fa-globe ml-2"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <footer className="bg-gray-100 p-6 border-t border-gray-200">
           <p className="text-xs text-center text-gray-500 font-semibold italic">
              Disclaimer: While we make every effort to provide accurate information, TopOnlineForm is not responsible for any errors or omissions. Please verify all information from the official notification.
           </p>
        </footer>
      </article>

      {/* Recommendations */}
      <div className="mt-16">
        <h3 className="text-2xl font-black mb-6 uppercase text-blue-900 border-b-4 border-blue-900 pb-2 inline-block">Similar Latest Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getByCategory(job.category).filter(p => p.id !== job.id).slice(0, 4).map(recJob => (
            <Link key={recJob.id} href={`/job/${recJob.id}`} className="bg-white p-5 border-l-4 border-blue-600 rounded shadow-sm hover:shadow-md transition group">
              <span className="text-blue-700 font-bold block group-hover:text-red-700 mb-2">{recJob.title}</span>
              <span className="text-xs text-gray-500 font-bold uppercase">Published: {recJob.postDate}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
