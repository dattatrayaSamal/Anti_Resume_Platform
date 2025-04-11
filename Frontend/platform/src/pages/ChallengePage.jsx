import React, { useState } from 'react';

export default function ChallengePage() {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Code submitted for evaluation.');
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-4xl mx-auto bg-white shadow rounded mt-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Skill Challenge</h2>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Write your solution here..." className="w-full h-64 p-4 border rounded resize-none"></textarea>
      <button type="submit" className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Submit Code</button>
    </form>
  );
}
