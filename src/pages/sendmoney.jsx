import Header from "../components/header";
import Recipent from "../components/Reciepients";
import SearchContacts from "../components/Searchcontact";
import SendMoney from "../components/Sendmoney";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from "../components/BottomNavigation";

function SendMoneyPage() {
    return(
       <div className="w-screen flex-col overflow-x-hidden flex items-center mb-[120px] ">
         <Header />
         <p className="self-start mt-5 mb-4 px-[7%] font-poppins text-[16px] font-normal ">Send Money directly to people in your contact</p>
        <SearchContacts />
         <p className="self-start mt-12 mb-1 px-[7%] font-poppins text-[16px] font-normal ">Transfer History</p>
         <Recipent />
         <div className="self-start w-screen ">
          <p className="self-start mt-12 mb-4 px-[7%] text-textred font-poppins text-[16px] font-normal ">Not in contacts? send here!</p>
           <TransactionForm />
         </div>
         <BottomNavigation />
       </div>
    )
}



function TransactionForm() {
  const navigate = useNavigate();
  // const [accountNumber, setAccountNumber] = useState('');
  // const [recipientName, setRecipientName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [description, setDescription] = useState('');
  // const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
  accountNumber: '',
  amount: '',
  description: '',
  pin: ''
});

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  // Get sender's account number from localStorage
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  if (!userDetails?.accountNumber) {
    setError('Sender account not found. Please login again.');
    setLoading(false);
    return;
  }

  // Validate input before making API call
  if (!formData.accountNumber || !formData.amount || Number(formData.amount) <= 0) {
    setError('Please enter valid transfer details');
    setLoading(false);
    return;
  }

  try {
    const transferData = {
      fromAccount: userDetails.accountNumber, // Add sender's account number
      accountNumber: formData.accountNumber, // Recipient's account
      amount: Number(formData.amount),
      description: formData.description || 'N/A'
    };

    const response = await axios.post('http://localhost:5000/api/transactions/transfer', transferData);

    localStorage.setItem('transactionDetails', JSON.stringify({
      ...transferData,
      transactionId: response.data.transactionId,
      reference: response.data.reference,
      status: response.data.status,
      date: new Date().toLocaleString()
    }));

    navigate('/receipt');
  } catch (err) {
    const errorMessage = err.response?.data?.message || 'Transfer failed';
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-[86%] mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1">
          <label className="font-mulish text-textprimary text-sm">
            Account Number
          </label>
          <input
            type="text"
            value={formData.accountNumber}
            name="accountNumber"
           onChange={e =>
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }maxLength={10}
            pattern="\d{10}"
            className="w-full py-1.5 px-2 border rounded-[10px] text-sm"
            placeholder="Enter 10 digit account number"
            required
          />
          {/* {loading && (
            <p className="text-textgray text-sm">Looking up account...</p>
          )}
          {recipientName && (
            <p className="font-poppins font-semibold text-green text-sm">
              {recipientName}
            </p>
          )}
          {error && (
            <p className="text-[#FE3737] text-sm">{error}</p>
          )} */}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mulish text-textprimary text-sm">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={e =>
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  } className="w-full py-1.5 px-2 border rounded-[10px] text-sm"
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mulish text-textprimary text-sm">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={e =>
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }className="w-full py-1.5 px-2 border rounded-[10px] text-sm"
            placeholder="Enter transaction description"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mulish text-textprimary text-sm">
            Transaction PIN
          </label>
          <input
            type="password"
            name= "pin"
            value={formData.pin}
            onChange={e =>
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  } maxLength={4}
            pattern="\d{4}"
            className="w-full py-1.5 px-2 border rounded-[10px] text-sm"
            placeholder="Enter 4-digit PIN"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FE3737] text-white font-mulish py-2 rounded-[15px] mt-4"
        >
          {loading ? 'Processing...' : 'Send Money'}
        </button>
      </form>
    </div>
  );
}



export default SendMoneyPage;