
import React, { useState } from 'react';
import SEO from '../components/SEO';

const Tools: React.FC = () => {
  const [dob, setDob] = useState('');
  const [asOn, setAsOn] = useState(new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!dob || !asOn) return;
    const start = new Date(dob);
    const end = new Date(asOn);
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SEO 
        title="Candidate Tools - Age Calculator, Resume Builder"
        description="Free online tools for government job seekers. Calculate your age as per job notification, build professional resumes, and more."
        keywords={['Age Calculator', 'Govt Job Tools', 'Sarkari Tools', 'Online Resume Builder']}
        canonicalUrl="https://toponlineform.com/#/tools"
      />

      <h1 className="text-3xl font-bold text-blue-900 mb-8 uppercase text-center">Candidate Utility Tools</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Age Calculator Tool */}
        <div className="bg-white border-2 border-blue-900 rounded-lg shadow-xl overflow-hidden">
          <div className="bg-blue-900 text-white p-4 font-bold uppercase">
            <i className="fas fa-calculator mr-2"></i> Online Age Calculator
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-600 mb-6">Calculate your exact age for government job forms instantly.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Date of Birth</label>
                <input 
                  type="date" 
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Age as on Date</label>
                <input 
                  type="date" 
                  value={asOn}
                  onChange={(e) => setAsOn(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              <button 
                onClick={calculateAge}
                className="w-full bg-blue-800 text-white font-bold py-3 rounded hover:bg-blue-900 transition shadow-lg"
              >
                CALCULATE AGE
              </button>

              {result && (
                <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-center animate-bounce-short">
                  <p className="text-gray-600 text-sm">Your Exact Age is:</p>
                  <p className="text-2xl font-black text-green-800">
                    {result.years} Years, {result.months} Months, {result.days} Days
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Cards for other tools */}
        <div className="space-y-4">
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg hover:border-red-500 transition cursor-not-allowed opacity-75">
            <div className="flex items-center mb-2">
              <i className="fas fa-file-invoice text-3xl text-red-600 mr-4"></i>
              <h3 className="text-xl font-bold">Resume Builder</h3>
            </div>
            <p className="text-sm text-gray-500">Create professional resumes for job applications. (Coming Soon)</p>
          </div>

          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 transition cursor-not-allowed opacity-75">
            <div className="flex items-center mb-2">
              <i className="fas fa-keyboard text-3xl text-green-600 mr-4"></i>
              <h3 className="text-xl font-bold">Typing Speed Test</h3>
            </div>
            <p className="text-sm text-gray-500">Practice for SSC & Bank typing exams. (Coming Soon)</p>
          </div>

          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 transition cursor-not-allowed opacity-75">
            <div className="flex items-center mb-2">
              <i className="fas fa-image text-3xl text-yellow-500 mr-4"></i>
              <h3 className="text-xl font-bold">Photo/Sign Resizer</h3>
            </div>
            <p className="text-sm text-gray-500">Resize images as per notification requirements. (Coming Soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
