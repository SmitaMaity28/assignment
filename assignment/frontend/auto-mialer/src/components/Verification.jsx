import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Verification() {
  const [otpData, setOtpData] = useState({
    emailOTP: '',
    mobileOTP: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtpData({
      ...otpData,
      [e.target.name]: e.target.value
    });
  };

  const verifyOTP = async (type) => {

try {
    const API_URL = 'https://jobpost-bacend.onrender.com/api/auth/otp';
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":sessionStorage.getItem("authtoken") 
      },
      body: JSON.stringify({otp:otpData.emailOTP})
    });

    const result = await response.json();
  
        if (response.ok) {
          navigate("/post-job");
          console.log(result);
        } 
        else{
            setOtpData({
                emailOTP: '',
                mobileOTP: ''
              });
              alert("wrong otp")
        }
} catch (error) {
    console.log(error)
}



  };

  return (
    <div className="verification-container">
      <h2>Verify Your Account</h2>
      <div>
        <input
          type="text"
          name="emailOTP"
          className="form-input"
          placeholder="Enter Email OTP"
          onChange={handleChange}
          required
        />
        <button className="verify-button" onClick={() => verifyOTP('emailOTP')}>Verify Email</button>
      </div>
    </div>
  );
}

export default Verification;
