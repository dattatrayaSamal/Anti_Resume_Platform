import React, { useState } from "react";

export default function PostChallenge() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("🚀 Form submitted");

    const companyId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    console.log("🧾 companyId:", companyId);
    console.log("🔐 token:", token);

    if (!companyId || !token) {
      alert("❗ You must be logged in as an employer to post a challenge.");
      console.error("Missing companyId or token. Stopping submission.");
      setLoading(false);
      return;
    }

    const payload = {
      ...formData,
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      company: companyId,
    };

    console.log("📦 Payload to be sent:", payload);

    try {
      const res = await fetch(
        "https://anti-resume-platform-tvpd.onrender.com/company/challenges",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      console.log("✅ Response data:", data);

      if (res.ok) {
        alert("🎉 Challenge posted successfully!");
        setFormData({ title: "", description: "", skills: "" });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("❌ Error during fetch:", err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Post a Challenge
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Challenge Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl"
            required
          />
          <textarea
            name="description"
            placeholder="Challenge Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl"
            required
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white p-3 rounded-xl font-semibold transition`}
          >
            {loading ? "Submitting..." : "Submit Challenge"}
          </button>
        </form>
      </div>
    </div>
  );
}
