import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx"
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProtectedRoute from "./features/auth/ProtectedRoute.jsx";
import { Toaster } from "./components/ui/Toaster.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import PredictionHistoryDetailPage from "./pages/PredictionHistoryDetailPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />

          <Route
              path="/dashboard"
              element={<Dashboard />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route
               path="/history"
               element={<HistoryPage />}
            />

             <Route
                path="/history/:predictionId"
                element={<PredictionHistoryDetailPage />}
             />
             
          </Route>
        </Routes>

        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
