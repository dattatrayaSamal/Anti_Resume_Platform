import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function CandidateDashboard() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">Welcome, Candidate!</h1>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Start a New Challenge</h2>
        <p className="text-gray-600 mb-6">Test your skills by attempting real-world problems posted by companies.</p>
        <Link to="/challenge/123" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
          <FileText size={20} /> Try Challenge
        </Link>
      </div>
    </div>
  );
}