import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import signupImage from "../assets/images/signupframe.png"; 

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save the user data to localStorage
      localStorage.setItem('userDetails', JSON.stringify({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        accountNumber: data.user.accountNumber,
        phone: data.user.phone
      }));

      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="min-h-screen w-screen flex flex-col md:flex-row">
        
        {/* Left/Form Section */}
        <div className="
          w-full md:w-1/2 
          flex flex-col items-center justify-start gap-4 
          bg-[#0E1534] text-white 
          px-6 pt-[80px] pb-8 
          min-h-screen md:min-h-screen
        ">
          <h1 className="text-2xl font-bold mb-2">Login</h1>
          <p className="text-gray-300 mb-6 text-center">
            Welcome back! Please login to your account
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-[300px] flex flex-col">
            <label className="block text-gray-200 font-mulish mb-2 text-left">
              Enter your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-4 text-black"
              placeholder="Email"
              required
            />

            <label className="block text-gray-200 font-mulish mb-2 text-left">
              Enter your password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-6 text-black"
              placeholder="Password"
              required
            />

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            
            <button
              type="submit"
              disabled={!email || !password || loading}
              className="rounded-[15px] w-full bg-[#FE3737] text-white font-mulish py-2"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* Right/Image Section - desktop only */}
        <div className="hidden md:flex w-1/2 md:min-h-screen justify-center items-center bg-gray-50">
          <img
            src={signupImage}
            alt="Login Visual"
            className="max-w-[400px] w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
