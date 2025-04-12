import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

export default function EmployerDashboard() {
  const [challenges, setChallenges] = useState([
    {
      _id: "static1",
      title: "Frontend UI Fix Challenge",
      description:
        "Test candidates on debugging and UI alignment using HTML/CSS.",
      skills: ["HTML", "CSS", "UI/UX"],
      createdAt: new Date(),
    },
    {
      _id: "static2",
      title: "REST API Builder",
      description:
        "Candidates should create and document a simple RESTful API.",
      skills: ["Node.js", "Express", "API Design"],
      createdAt: new Date(),
    },
    {
      _id: "static3",
      title: "React Dashboard Task",
      description:
        "Ask developers to build a mini-dashboard with React & Charts.",
      skills: ["React", "Chart.js", "Hooks"],
      createdAt: new Date(),
    },
  ]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEmployerChallenges = async () => {
      try {
        const res = await fetch(
          "https://anti-resume-platform-tvpd.onrender.com/employer/post-challenge",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        if (res.ok && Array.isArray(data) && data.length > 0) {
          setChallenges(data);
        }
      } catch (error) {
        console.error("Error fetching challenges:", error);
        // fallback to static challenges
      }
    };

    fetchEmployerChallenges();
  }, [token]);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-white to-purple-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">
          Employer Dashboard
        </h1>
        <button
          onClick={() => navigate("/employer/post-challenge")}
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          <PlusCircle size={20} /> Post New Challenge
        </button>
      </div>

      {challenges.length === 0 ? (
        <p className="text-gray-600">No challenges posted yet.</p>
      ) : (
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
                <p className="text-gray-600 mt-2 mb-4">
                  {challenge.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">
                    Skills:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {challenge.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded-full"
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
