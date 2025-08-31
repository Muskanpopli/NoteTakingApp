// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";

export default function App() {
  return (
    // <div className="min-h-screen bg-gray-100 text-gray-900">
    //   {/* Simple Nav for now */}
    //   <nav className="p-4 bg-white shadow flex gap-4">
    //     <Link to="/login" className="text-blue-600">Login</Link>
    //     <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
    //     <Link to="/settings" className="text-blue-600">Settings</Link>
    //   </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    // </div>
  );
}
