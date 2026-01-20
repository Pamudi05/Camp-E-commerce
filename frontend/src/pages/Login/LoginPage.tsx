import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import TextField from "../../components/input/TextField";
import Button from "../../components/button/Button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailError = () => {
    setEmailTouched(true);

    if (!validateEmail(email)) {
      setEmailError("Incorrect email. Please try again.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordError = () => {
    setPasswordTouched(true);

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    try {
      setEmailTouched(true);
      setPasswordTouched(true);

      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePassword(password);

      setEmailError(isEmailValid ? "" : "Email is required");
      setPasswordError(isPasswordValid ? "" : "Password is required");

      if (isEmailValid && isPasswordValid) {
        const response = await axios.post(
          "http://localhost:5000/api/v1/auth/login",
          {
            email,
            password,
          },
        );

        toast.success("User Login Succefully");
        navigate("/layout");
        return response.data;
      }
    } catch (error) {
      toast.error("Login Failed");
      console.error(error);
    }
  };

  const handleForgotPassword = ()=>{
    navigate('/forgotpassword')
  }

  return (
    <div className="loginOuter">
      <div className="loginInner">
        <div className="loginLeft element"></div>
        <div className="loginRight element">
          <h2 className="heading">LOGIN</h2>
          <div className="textfile-box">
            <TextField
              className="textfield"
              type="email"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailError}
            />
            {emailTouched && emailError && (
              <p className="error-text">{emailError}</p>
            )}
            </div>
            <div className="textfile-box">
            <TextField
              className="textfield"
              type="password"
              placeholder="Enter you password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordError}
            />
            {passwordTouched && passwordError && (
              <p className="error-text">{passwordError}</p>
            )}
          </div>
          <div className="forgot-box">
            <p onClick={handleForgotPassword}>forgotPassowrd?</p>
          </div>
          <div className="button-box">
            <Button
              onButtonClick={handleLogin}
              className="button"
              type="submit"
              name="LOGIN"
            />
          </div>
          <div className="bottom-box">
            <p>
              Create an account?{" "}
              <span>
                <Link to="/register">SignUp</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
