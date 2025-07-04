import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpWithEmail, loginWithEmail } from "../firebase/authService"; // Import Firebase functions

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate(); // ✅ Initialize navigation for redirection

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isSignUp && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      let user;
      if (isSignUp) {
        user = await signUpWithEmail(formData.email, formData.password);
      } else {
        user = await loginWithEmail(formData.email, formData.password);
      }

      // ✅ Store authentication token in localStorage
      localStorage.setItem("authToken", user.uid);

      alert(`${isSignUp ? "Sign Up" : "Login"} Successful!`);

      // ✅ Redirect to homepage after successful login/signup
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-800 transition"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-700 font-bold ml-1"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>

        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-600 hover:text-indigo-700">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
