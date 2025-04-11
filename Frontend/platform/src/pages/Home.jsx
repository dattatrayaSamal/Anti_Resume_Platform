import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col justify-center items-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Anti-Resume Job Platform
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Skills over CVs. Challenges over buzzwords. Let your work speak for
          you.
        </p>
        <div className="flex justify-center">
          <Link
            to="/auth"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        <FeatureCard
          title="Challenge Based Hiring"
          desc="Candidates complete real tasks instead of uploading resumes."
        />
        <FeatureCard
          title="Blind Matching"
          desc="AI removes bias by hiding identity during initial matching."
        />
        <FeatureCard
          title="Real Company Work"
          desc="Employers post real-world samples, not generic JDs."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
