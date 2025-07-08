import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TransferStatus(){
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const details = localStorage.getItem('transactionDetails');
    if (!details) {
      navigate('/');
      return;
    }
    setTransaction(JSON.parse(details));
  }, [navigate]);

  if (!transaction) return null;

    return(
        <div>

        </div>
    )
}