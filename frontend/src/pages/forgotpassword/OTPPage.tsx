import TextField from "../../components/input/TextField";
import "./ForgotPassword.css";
import Button from "../../components/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const OTPPage = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);

  const email = localStorage.getItem("forgotEmail");

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerifyOTP = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 4) {
      toast.error("Enter 4-digit OTP");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/v1/auth/verifyOtp", {
        email,
        otp: finalOtp,
      });

      toast.success("OTP verified!");
      navigate("/resetpassword");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="forgotOuter">
      <div className="forgotInner">
        <h2>OTP</h2>
        <div>
          <div className="otp-box">
            {otp.map((digit, index) => (
              <TextField
                key={index}
                className="otpfield"
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>
        </div>

        <div className="button-box">
          <Button
            className="button"
            type="submit"
            name="VERIFY NOW"
            onButtonClick={handleVerifyOTP}
          />
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
