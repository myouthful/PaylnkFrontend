import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Import your pages/components
import Home from '../src/pages/homepage'
import SignUp from '../src/pages/signup'
import Dashboard from '../src/pages/dashboard'
import SendMoney from '../src/pages/sendmoney'
import ProfilePage from '../src/pages/profilepage'
import SignInPage from '../src/pages/signin'
import TransactionreceiptPage from './pages/receipt'
// Add more imports as needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sendmoney" element={<SendMoney />} />
        <Route path="/profile" element={<ProfilePage />} />
       <Route path="/signin" element={<SignInPage />} />
        <Route path="/receipt" element={<TransactionreceiptPage />} />  
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
