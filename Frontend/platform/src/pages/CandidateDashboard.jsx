import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function CandidateDashboard() {
  const [challenges, setChallenges] = useState([
    {
      _id: "static1",
      title: "Build a Portfolio Website",
      description: "Create a personal portfolio using React and Tailwind CSS.",
      skills: ["React", "Tailwind CSS", "Frontend"],
      createdAt: new Date(),
    },
    {
      _id: "static2",
      title: "API Integration Task",
      description: "Integrate a public API and display data in a clean UI.",
      skills: ["JavaScript", "REST APIs", "Async/Await"],
      createdAt: new Date(),
    },
    {
      _id: "static3",
      title: "Debug & Fix a Broken Form",
      description: "You’ll get a broken login form – find and fix all the bugs.",
      skills: ["HTML", "JavaScript", "Debugging"],
      createdAt: new Date(),
    },
  ]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await fetch(
          "https://anti-resume-platform-2.onrender.com/challenges"
        );
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setChallenges(data);
        }
      } catch (error) {
        console.error("Failed to fetch challenges:", error);
        // fallback to static data
      }
    };

    fetchChallenges();
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">
        Welcome, Candidate!
      </h1>

      {/* Featured Challenge */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Featured Challenge</h2>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg mb-8">
        <p className="font-semibold">"Crack the Code: Debug the Glitched Login"</p>
        <p className="text-sm">Fix the bugs in a non-working login page. 🐞 A perfect test of your JS and debugging skills!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge._id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {challenge.title}
              </h2>
              <p className="text-gray-600 mt-2 mb-4">{challenge.description}</p>
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">Skills:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {challenge.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-700 text-sm px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Posted on {new Date(challenge.createdAt).toLocaleDateString()}
              </p>
            </div>

            <Link
              to={`/challenge/${challenge._id}`}
              className="mt-4 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              <FileText size={18} /> Try Challenge
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
