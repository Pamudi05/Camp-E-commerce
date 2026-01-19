import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import TextField from "../../components/input/TextField";
import Button from "../../components/button/Button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return emailRegex.test(email);
  };

  const validateName = (name: string) => {
    return name.trim().length > 0;
  };

  const validatePhone = (phoneNumber: string) => {
    const phoneRegex = /^(?:\+94\s?7\d{8}|0\s*7\d{1}\s*\d{3}\s*\d{4})$/;
    console.log(phoneNumber)
    console.log(phoneRegex.test(phoneNumber))
    return phoneRegex.test(phoneNumber);
    
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

  const handlePhoneError = () => {
    setPhoneTouched(true);

    if (!validatePhone(phoneNumber)) {
      setPhoneError("Should be correct phone number format");
    } else {
      setPhoneError("");
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

  const handleRegister = async () => {
    try {
      setEmailTouched(true);
      setNameTouched(true);
      setPhoneTouched(true);
      setPasswordTouched(true);

      const isEmailValid = validateEmail(email);
      const isNameValid = validateName(name);
      const isPhoneValid = validatePhone(phoneNumber);
      const isPasswordValid = validatePassword(password);

      setEmailError(isEmailValid ? "" : "Email is required");
      setNameError(isNameValid ? "" : "Name is required");
      setPhoneError(isPhoneValid ? "" : "Phone Number is required");
      setPasswordError(isPasswordValid ? "" : "Password is required");

      if (isEmailValid && isNameValid && isPhoneValid && isPasswordValid) {
        const response = await axios.post(
          "http://localhost:5000/api/v1/users/create",
          {
            email,
            name,
            phoneNumber,
            password,
          },
        );

        setEmail("");
        setName("");
        setPhoneNumber("");
        setPassword("");

        toast.success("User Registered Succefully");
        navigate("/");
        return response.data;
      }
    } catch (error) {
      toast.error("Register  Failed");
      console.error(error);
    }
  };

  return (
    <div className="registerOuter">
      <div className="registerInner">
        <div className="registerLeft element"></div>
        <div className="registerRight element">
          <h2 className="heading">REGISTER</h2>
          <div className="textfile-box">
            <TextField
              type="email"
              placeholder="Email"
              className="textfield"
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
              type="text"
              placeholder="Name"
              className="textfield"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameTouched(true)}
            />
            {nameTouched && nameError && (
              <p className="error-text">{nameError}</p>
            )}
          </div>
          <div className="textfile-box">
            <TextField
              type="tel"
              placeholder="Contact Number"
              className="textfield"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={handlePhoneError}
            />
            {phoneTouched && phoneError && (
              <p className="error-text">{phoneError}</p>
            )}
          </div>
          <div className="textfile-box">
            <TextField
              type="password"
              placeholder="Password"
              className="textfield"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordError}
            />
            {passwordTouched && passwordError && (
              <p className="error-text">{passwordError}</p>
            )}
          </div>
          <div className="button-box">
            <Button
              onButtonClick={handleRegister}
              className="button"
              type="submit"
              name="REGISTER"
            />
          </div>
          <div className="bottom-box">
            <p>
              Already have an account?
              <span>
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
