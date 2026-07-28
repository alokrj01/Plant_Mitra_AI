import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Toaster } from "./components/ui/Toaster.jsx";

function App() {
  return (
    <div className="
        min-h-screen
        bg-white
        text-slate-900
        dark:bg-slate-950
        dark:text-slate-100
        transition-colors
        duration-300
      ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;