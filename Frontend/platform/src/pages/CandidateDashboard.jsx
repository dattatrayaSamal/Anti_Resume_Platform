import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateDashboard() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Candidate Dashboard</h1>
      <Link to="/challenge/123" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Try Challenge</Link>
    </div>
  );
}
