



import React, { useState } from 'react';
import './UpiForm.css';

const UpiForm = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [balance,setBalance]=useState(1000);
  const [isPass,setisPass]=useState(false)
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handlePayment = () => {
    setisPass(!isPass)
  };

  return (<>
    {!isPass&& <div className="upi-form-container">
      <h2>Make a UPI Payment {balance}</h2>
      <div className="form-group">
        <label>UPI ID:</label>
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Pay</button>
    </div>}


    {
        isPass&&<div className="upi-form-container">
        <label>
          Password:
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={togglePasswordVisibility} className="toggle-password">
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </label><br></br>
        <center>
        <button onClick={()=>{
            if(password=="123456" && balance-amount>=0){
                setBalance(balance-amount);
                setisPass(!isPass)
            }else{
                setisPass(!isPass)

            }
        }}>Pay</button></center>
      </div>
    }


  </>
  );
};


export default function UPI(){



    //UPi Screen
    return<div>

        <UpiForm/>
    </div>
}