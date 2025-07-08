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
      <div className="min-h-screen w-screen flex flex-col md:flex-row items-center md:justify-center bg-white">
        <div className="w-[50%] max-w-xs flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold mb-2">Login</h1>
          <p className="text-gray-600 mb-4 text-center">
            Welcome back! Please login to your account
          </p>

          <label className="text-gray-700 font-mulish mb-1">
            Enter your email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 w-full mb-2"
            placeholder="Email"
            required
          />

          <label className="text-gray-700 font-mulish mb-1">
            Enter your password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 w-full mb-2"
            placeholder="Password"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            onClick={handleSubmit}
            disabled={!email || !password || loading}
            className="rounded-[15px] w-[250px] bg-[#FE3737] text-white font-mulish py-2"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="hidden md:flex w-[50%] md:w-1/2 justify-center items-center bg-gray-50">
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