import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx"
import Login from "./pages/LoginPage.jsx";
import Register from "./pages/RegisterPage.jsx";
import ForgotPassword from "./pages/ForgotPasswordPage.jsx";
import ResetPassword from "./pages/ResetPasswordPage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import ProtectedRoute from "./layouts/ProtectedRoute.jsx";
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
