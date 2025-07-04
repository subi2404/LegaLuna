import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Scale, MessageCircle, FileText, Phone, Users, BookOpen, Library, Menu, X, LogOut, LogIn } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in (persist state)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Convert to boolean
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Legaluna</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/chatbot" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>AI Chatbot</span>
            </Link>
            <Link to="/templates" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition">
              <FileText className="h-5 w-5 mr-1" />
              <span>Templates</span>
            </Link>
            <Link to="/guides" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition">
              <BookOpen className="h-5 w-5 mr-1" />
              <span>Guides</span>
            </Link>
            <Link to="/resources" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition">
              <Library className="h-5 w-5 mr-1" />
              <span>Resources</span>
            </Link>
            <Link to="/community" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition">
              <Users className="h-5 w-5 mr-1" />
              <span>Community</span>
            </Link>
            <Link to="/helpline" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition">
              <Phone className="h-5 w-5 mr-1" />
              <span>Helpline</span>
            </Link>

            {/* Login / Logout Button */}
            {isAuthenticated ? (
              <button onClick={handleLogout} className="flex items-center px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 transition">
                <LogOut className="h-5 w-5 mr-1" />
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition">
                <LogIn className="h-5 w-5 mr-1" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-700">
            <Link to="/chatbot" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>AI Chatbot</span>
            </Link>
            <Link to="/templates" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>
              <FileText className="h-5 w-5 mr-2" />
              <span>Templates</span>
            </Link>
            <Link to="/guides" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>
              <BookOpen className="h-5 w-5 mr-2" />
              <span>Guides</span>
            </Link>

            {/* Mobile Login / Logout Button */}
            {isAuthenticated ? (
              <button onClick={handleLogout} className="flex items-center px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 transition">
                <LogOut className="h-5 w-5 mr-2" />
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center px-3 py-2 rounded-md bg-white text-indigo-700 hover:bg-gray-200 transition" onClick={() => setIsMenuOpen(false)}>
                <LogIn className="h-5 w-5 mr-2" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
