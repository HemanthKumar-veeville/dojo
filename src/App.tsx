import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestEnvironmentPage from "./pages/TestEnvironmentPage";
import EditorPage from "./pages/EditorPage";
// import AdminDashboardPage from "./pages/";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestEnvironmentPage />} />
        <Route path="/editor" element={<EditorPage />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboardPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
