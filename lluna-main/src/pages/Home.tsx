import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText, Phone, Users, BookOpen, Mic } from 'lucide-react';

const Home = () => {
  const commonQuestions = [
    "How do I file an FIR?",
    "What are my rights if arrested?",
    "How to draft a rental agreement?",
    "What is the process for divorce in India?"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Legal Assistant, Simplified</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get instant legal guidance, access templates, and connect with experts - all in one place.
        </p>
      </div>

      {/* AI Chatbot - Main Feature */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-10 text-center max-w-3xl mx-auto transform transition-all hover:shadow-lg">
        <div className="mb-6">
          <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
            <MessageCircle className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ask Legal AI Chatbot</h2>
          <p className="text-gray-600 mb-6">Get instant answers to your legal questions</p>
        </div>

        <Link to="/chatbot" className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition mb-6 w-full sm:w-auto">
          <MessageCircle className="h-5 w-5 mr-2" />
          Start Chatting
        </Link>

        <div className="flex items-center justify-center mb-6">
          <div className="border-t border-gray-200 flex-grow mr-4"></div>
          <span className="text-gray-500">or</span>
          <div className="border-t border-gray-200 flex-grow ml-4"></div>
        </div>

        <button className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition mb-6 w-full sm:w-auto">
          <Mic className="h-5 w-5 mr-2" />
          Speak Your Question
        </button>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Common Questions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commonQuestions.map((question, index) => (
              <button 
                key={index}
                className="bg-gray-50 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-left text-sm border border-gray-200 transition"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Legal Templates Card */}
        <Link to="/templates" className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Legal Templates</h3>
          <p className="text-gray-600">Ready-to-download legal documents for various needs</p>
        </Link>

        {/* Legal Helpline Card */}
        <Link to="/helpline" className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <Phone className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Legal Helpline</h3>
          <p className="text-gray-600">One-tap call to government legal aid services</p>
        </Link>

        {/* Community Forum Card */}
        <Link to="/community" className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <Users className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Forum</h3>
          <p className="text-gray-600">Ask questions, get responses from verified lawyers</p>
        </Link>

        {/* Legal Guides Card */}
        <Link to="/guides" className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-amber-100 p-4 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-amber-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Legal Guides</h3>
          <p className="text-gray-600">Simple explanations of complex legal concepts</p>
        </Link>
      </div>

      {/* Testimonials */}
      <div className="bg-indigo-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">"Legaluna helped me understand my rights as a tenant. The AI chatbot explained everything in simple terms!"</p>
            <p className="font-medium text-gray-800">- Priya S.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">"I used the legal templates to draft a will. Saved me thousands in lawyer fees and was so easy to use."</p>
            <p className="font-medium text-gray-800">- Rahul M.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">"The community forum connected me with a lawyer who answered my property dispute question within hours."</p>
            <p className="font-medium text-gray-800">- Anjali P.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;