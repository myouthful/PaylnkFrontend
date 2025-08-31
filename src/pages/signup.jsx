import React, { useState } from "react";
import signupImage from "../assets/images/signupframe.png"; 
import Header from "../components/header";
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bvn, setBvn] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleNext = () => {
    if (step === 3 && !validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);
  
    const signupData = {
      firstName,
      lastName,
      phone,
      email,
      bvn,
      password
    };

    console.log('Sending data:', signupData);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
      
      localStorage.setItem('userDetails', JSON.stringify({
        email: data.user.email,
        accountNumber: data.user.accountNumber,
        phone: data.user.phone
      }));

      setSuccess(true);
      navigate('/signin');
    } catch (err) {
      setError(err.message);
      console.error('Error details:', err);
    }
    setLoading(false);
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      {/* Page content wrapper */}
      <div className="min-h-screen w-screen flex flex-col md:flex-row">
        {/* Left/Form Section */}
        <div className="
          w-full md:w-1/2 
          flex flex-col items-center justify-start gap-4 
          bg-[#0E1534] text-white 
          px-6 pt-[80px] pb-8 
          min-h-screen md:min-h-screen
        ">
          <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-300 mb-6 text-center">
            Set up and verify your account in 30 seconds.
          </p>

          {/* FORM STEPS (kept logic intact) */}
          <div className="w-full max-w-[300px]">
            {step === 1 && (
              <>
                <label className="block text-gray-200 font-mulish mb-2 text-left">
                  Enter your first name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4 text-black"
                  placeholder="First name"
                />
                <label className="block text-gray-200 font-mulish mb-2 text-left">
                  Enter your last name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-6 text-black"
                  placeholder="Last name"
                />
                <button
                  className="rounded-[15px] w-full bg-[#FE3737] text-white font-mulish py-2"
                  onClick={handleNext}
                  disabled={!firstName || !lastName}
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <label className="block text-gray-200 font-mulish mb-2 text-left">
                  Enter your phone number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-6 text-black"
                  placeholder="Phone number"
                />
                <button
                  className="rounded-[15px] w-full bg-[#FE3737] text-white font-mulish py-2"
                  onClick={handleNext}
                  disabled={!phone}
                >
                  Next
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <label className="block text-gray-200 font-mulish mb-2 text-left">
                  Enter your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4 text-black"
                  placeholder="Email"
                />
                {emailError && (
                  <span className="text-red-500 text-sm mb-4 block">{emailError}</span>
                )}
                <button
                  className="rounded-[15px] w-full bg-[#FE3737] text-white font-mulish py-2"
                  onClick={handleNext}
                  disabled={!email}
                >
                  Next
                </button>
              </>
            )}

            {step === 4 && (
              <>
                <label className="block text-gray-200 font-mulish mb-2 text-left">
                  Enter your BVN
                </label>
                <input
                  type="text"
                  value={bvn}
                  onChange={(e) => setBvn(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-6 text-black"
                  placeholder="BVN"
                />
                <button
                  className="rounded-[15px] w-full bg-[#FE3737] text-white font-mulish py-2"
                  onClick={handleNext}
                  disabled={!bvn}
                >
                  Next
                </button>
              </>
            )}

            {step === 5 && (
              <>
                <label className="block text-gray-200 font-mulish mb-2 text-left">
                  Enter your password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-6 text-black"
                  placeholder="Password"
                />
                <button
                  className="rounded-[15px] w-full bg-[#FE3737] text-white font-mulish py-2"
                  onClick={handleSubmit}
                  disabled={!password || loading}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {success && (
                  <p className="text-green-500 text-sm mt-2">Signup successful!</p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right/Image Section - only shows on desktop */}
        <div className="hidden md:flex w-1/2 md:min-h-screen justify-center items-center bg-gray-50">
          <img
            src={signupImage}
            alt="Sign Up Visual"
            className="max-w-[400px] w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
