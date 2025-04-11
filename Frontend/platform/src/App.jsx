import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import ChallengePage from "./pages/ChallengePage";
import "./App.css";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/candidate" element={<CandidateDashboard />} />
      <Route path="/employer" element={<EmployerDashboard />} />
      <Route path="/challenge/:id" element={<ChallengePage />} />
    </Routes>
  );
}

export default App;
