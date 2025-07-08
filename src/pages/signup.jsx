import React, { useState } from "react";
import signupImage from "../assets/images/signupframe.png"; 
import Header from "../components/header";
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Add this line
  const [success, setSuccess] = useState(false); // Add this line
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bvn, setBvn] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const validateEmail = (value) => {
    // Simple email regex
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

  console.log('Sending data:', signupData); // Debug the data being sent

  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });
    
    const data = await response.json(); // Get error message from server
    
    if (!response.ok) {
      throw new Error(data.message || "Signup failed");
    }
    
    localStorage.setItem('userDetails', JSON.stringify({
      email: data.user.email,
      accountNumber: data.user.accountNumber,
      phone: data.user.phone
    }));

    setSuccess(true);
    navigate('/signin'); // Redirect to sign in page on success
  } catch (err) {
    setError(err.message); // Show the specific error from server
    console.error('Error details:', err); // Debug log
  }
  setLoading(false);
};

  return (
    <div className="overflow-x-hidden ">
      <Header />
      <div className="min-h-screen w-screen  flex flex-col md:flex-row items-center md:justify-center bg-white">
        <div className="w-[50%] max-w-xs flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-600 mb-4 text-center">
            Set up and verify your account in 30 seconds.
          </p>
           {step === 1 && (
      <>
        <label className="text-gray-700 font-mulish mb-1">
          Enter your first name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded px-3 py-2 w-full mb-2"
          placeholder="First name"
        />
        <label className="text-gray-700 font-mulish mb-1">
          Enter your last name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border rounded px-3 py-2 w-full mb-2"
          placeholder="Last name"
        />
        <button
          className="rounded-[15px] w-[250px] bg-[#FE3737] text-white font-mulish py-2"
          onClick={handleNext}
          disabled={!firstName || !lastName}
        >
          Next
        </button>
      </>
    )}
          {step === 2 && (
            <>
              <label className="text-gray-700 font-mulish mb-1">
                Enter your phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded px-3 py-2 w-full mb-2"
                placeholder="Phone number"
              />
              <button
                className="rounded-[15px] w-[250px] bg-[#FE3737] text-white font-mulish py-2"
                onClick={handleNext}
                disabled={!phone}
              >
                Next
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <label className="text-gray-700 font-mulish mb-1">
                Enter your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-3 py-2 w-full mb-2"
                placeholder="Email"
              />
              {emailError && (
                <span className="text-red-500 text-sm mb-2">{emailError}</span>
              )}
              <button
                className="rounded-[15px] w-[250px] bg-[#FE3737] text-white font-mulish py-2"
                onClick={handleNext}
                disabled={!email}
              >
                Next
              </button>
            </>
          )}

          {step === 4 && (
            <>
              <label className="text-gray-700 font-mulish mb-1">
                Enter your BVN
              </label>
              <input
                type="text"
                value={bvn}
                onChange={(e) => setBvn(e.target.value)}
                className="border rounded px-3 py-2 w-full mb-2"
                placeholder="BVN"
              />
              <button
                className="rounded-[15px] w-[250px] bg-[#FE3737] text-white font-mulish py-2"
                onClick={handleNext}
                disabled={!bvn}
              >
                Next
              </button>
            </>
          )}

          {step === 5 && (
            <>
              <label className="text-gray-700 font-mulish mb-1">
                Enter your password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded px-3 py-2 w-full mb-2"
                placeholder="Password"
              />
              <button
                className="rounded-[15px] w-[250px] bg-[#FE3737] text-white font-mulish py-2"
                onClick={handleSubmit}
                disabled={!password || loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm">Signup successful!</p>
              )}
            </>
          )}
        </div>
        <div className="hidden md:flex w-[50%] md:w-1/2 justify-center items-center bg-gray-50">
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
