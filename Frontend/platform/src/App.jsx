import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import ChallengePage from "./pages/ChallengePage";
import Auth from "./pages/Auth";
import DashboardLayout from "./components/DashboardLayout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />

      {/* Wrap these routes with DashboardLayout */}
      <Route
        path="/candidate"
        element={
          <DashboardLayout>
            <CandidateDashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/employer"
        element={
          <DashboardLayout>
            <EmployerDashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/challenge/:id"
        element={
          <DashboardLayout>
            <ChallengePage />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default App;
