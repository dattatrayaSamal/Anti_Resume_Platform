import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ChallengePage() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Code submitted for evaluation.');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Skill Challenge</h2>
        <label className="block mb-2 text-gray-700 font-medium">Your Solution</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition flex items-center gap-2"
        >
          {loading && <Loader2 className="animate-spin" size={20} />} Submit Code
        </button>
      </form>
    </div>
  );
}
