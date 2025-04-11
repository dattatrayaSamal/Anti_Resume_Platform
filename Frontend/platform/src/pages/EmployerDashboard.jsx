import React from "react";
import { PlusCircle } from "lucide-react";

export default function EmployerDashboard() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-white to-purple-50">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Employer Dashboard
      </h1>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Manage Your Postings
        </h2>
        <p className="text-gray-600 mb-6">
          Create skill challenges and view top performing candidates.
        </p>
        <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          <PlusCircle size={20} /> Post New Challenge
        </button>
      </div>
    </div>
  );
}
