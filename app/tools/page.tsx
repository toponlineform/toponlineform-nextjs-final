
'use client';

import { useState } from 'react';
import { Metadata } from 'next';

export default function Tools() {
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
      <h1 className="text-3xl font-black text-blue-900 mb-8 uppercase text-center border-b-2 border-yellow-400 pb-2 inline-block w-full">Candidate Utility Tools</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Age Calculator Tool */}
        <div className="bg-white border-2 border-blue-900 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-blue-900 text-white p-5 font-black uppercase text-center">
            <i className="fas fa-calculator mr-2"></i> Sarkari Age Calculator
          </div>
          <div className="p-8">
            <p className="text-sm text-gray-600 mb-8 text-center font-semibold">Calculate your exact age as required for various Government Recruitment Forms.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wide">Enter Date of Birth</label>
                <input 
                  type="date" 
                  value={dob}
                  // Added type casting to HTMLInputElement to resolve "Property 'value' does not exist on type 'EventTarget'" error
                  onChange={(e) => setDob((e.target as HTMLInputElement).value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-bold" 
                />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wide">Age as on Date (Form Deadline)</label>
                <input 
                  type="date" 
                  value={asOn}
                  // Added type casting to HTMLInputElement to resolve "Property 'value' does not exist on type 'EventTarget'" error
                  onChange={(e) => setAsOn((e.target as HTMLInputElement).value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-bold" 
                />
              </div>
              <button 
                onClick={calculateAge}
                className="w-full bg-red-600 text-white font-black py-4 rounded-lg hover:bg-red-700 transition shadow-xl transform active:scale-95 uppercase tracking-widest"
              >
                CALCULATE NOW
              </button>

              {result && (
                <div className="mt-8 p-6 bg-green-50 border-4 border-green-400 rounded-xl text-center shadow-inner">
                  <p className="text-green-800 text-sm font-black uppercase mb-2 tracking-widest">Resulting Age</p>
                  <div className="flex justify-around items-center">
                    <div className="text-center">
                       <span className="block text-3xl font-black text-blue-900">{result.years}</span>
                       <span className="text-[10px] uppercase font-black text-gray-500">Years</span>
                    </div>
                    <div className="text-center">
                       <span className="block text-3xl font-black text-blue-900">{result.months}</span>
                       <span className="text-[10px] uppercase font-black text-gray-500">Months</span>
                    </div>
                    <div className="text-center">
                       <span className="block text-3xl font-black text-blue-900">{result.days}</span>
                       <span className="text-[10px] uppercase font-black text-gray-500">Days</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Placeholder for other tools */}
        <div className="flex flex-col space-y-4">
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 opacity-60 grayscale">
            <h3 className="font-black text-blue-900 uppercase">Resume Maker</h3>
            <p className="text-xs font-bold text-red-600 mt-1 uppercase">Development Phase...</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 opacity-60 grayscale">
            <h3 className="font-black text-blue-900 uppercase">Photo/Sign Resizer</h3>
            <p className="text-xs font-bold text-red-600 mt-1 uppercase">Development Phase...</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 opacity-60 grayscale">
            <h3 className="font-black text-blue-900 uppercase">Hindi/English Typing Test</h3>
            <p className="text-xs font-bold text-red-600 mt-1 uppercase">Development Phase...</p>
          </div>
          <div className="bg-blue-900 p-8 rounded-lg shadow-xl text-center text-white">
             <h4 className="text-lg font-black uppercase mb-4">Stay Connected</h4>
             <p className="text-sm font-medium opacity-80 mb-6">Join our community for the latest recruitment news and daily mock tests.</p>
             <button className="bg-yellow-400 text-blue-900 font-black px-8 py-3 rounded-full uppercase text-sm tracking-tighter hover:bg-yellow-300 transition">Join Telegram</button>
          </div>
        </div>
      </div>
    </div>
  );
}
