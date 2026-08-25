import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProtectedRoute from "./features/auth/ProtectedRoute.jsx";
import { Toaster } from "./components/ui/Toaster.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Route>
        </Routes>

        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
