import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChatbotScreen from "./pages/ChatbotScreen";
import LegalTemplates from "./pages/LegalTemplates";
import LegalHelpline from "./pages/LegalHelpline";
import CommunityForum from "./pages/CommunityForum";
import LegalGuides from "./pages/LegalGuides";
import LegalResources from "./pages/LegalResources";
import FloatingAssistant from "./components/FloatingAssistant";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />

            {/* Protected Routes */}
            <Route 
              path="/chatbot" 
              element={
                <ProtectedRoute>
                  <ChatbotScreen />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/templates" 
              element={
                <ProtectedRoute>
                  <LegalTemplates />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/helpline" 
              element={
                <ProtectedRoute>
                  <LegalHelpline />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/community" 
              element={
                <ProtectedRoute>
                  <CommunityForum />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/guides" 
              element={
                <ProtectedRoute>
                  <LegalGuides />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/resources" 
              element={
                <ProtectedRoute>
                  <LegalResources />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
        <FloatingAssistant />
      </div>
    </Router>
  );
}

export default App;
