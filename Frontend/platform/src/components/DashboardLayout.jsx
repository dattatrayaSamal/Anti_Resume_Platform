import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardLayout({ children, role = "candidate" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token or session logic here
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          {role === "employer" ? "Employer" : "Candidate"} Dashboard
        </h1>
        <nav className="space-x-4">
          <Link
            to={role === "employer" ? "/employer" : "/candidate"}
            className="text-blue-600 hover:underline"
          >
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
