// import '../cssfiles/generateotp.css';
import React, { useState } from "react";
import axios from 'axios';


const Getotp = () => {
  const [mobile, setMobile] = useState(" ");
  const [error, setError] = useState(" ");
  const [message, setMessage] = useState("");


  const postData = () => {
    const isValidNumber = /^[789]\d{9}$/.test(mobile);
    if (!isValidNumber) {
      setError("Invalid mobile number");
      return;
    } 

    const body = { mobile: Number(mobile) };
    const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
    const response = axios.post(url,body, {
    //   method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(body),
    });
             if (response.status === 200) {
          setError("OTP Sent successfully");
          setMobile("");
        } else {
            setMessage("Error: Something went wrong");
            setError(""); // Clear the error message
        }
        
}


    
    return (
    <div className="main_div">
    <h6> Hey ! Follow the Instruction</h6>
      <input
        type="text"
        value={mobile}
        placeholder="Enter Your Mobile Number"
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={postData} className="btn">Get OTP</button>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  )
    }

export default Getotp;