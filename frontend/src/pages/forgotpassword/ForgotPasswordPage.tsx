import { useState } from "react";
import TextField from "../../components/input/TextField";
import "./ForgotPassword.css";
import Button from "../../components/button/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return emailRegex.test(email);
  };

  const handleEmailError = () => {
    setEmailTouched(true);

    if (!validateEmail(email)) {
      setEmailError("Incorrect email. Please try again.");
    } else {
      setEmailError("");
    }
  };

  const handlesendOTP = async () => {
    try {
      setEmailTouched(true);

      const isEmailValid = validateEmail(email);

      setEmailError(isEmailValid ? "" : "Email is required");

      if (isEmailValid) {
        await axios.post(
          "http://localhost:5000/api/v1/auth/forgotpassword",
          {
            email,
          },
        );

        localStorage.setItem("forgotEmail", email);

        toast.success("OTP sent to your email");
        navigate('/otp')
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div className="forgotOuter">
      <div className="forgotInner">
        <h2>Forgot Password</h2>
        <div className="textfile-box">
          <TextField
            className="textfield"
            type="email"
            placeholder="Enter you email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            onBlur={handleEmailError}
          />
          {emailTouched && emailError && (
            <p className="error-text">{emailError}</p>
          )}
        </div>
        <div className="button-box">
          <Button
            onButtonClick={handlesendOTP}
            className="button"
            type="submit"
            name="SEND OTP"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
