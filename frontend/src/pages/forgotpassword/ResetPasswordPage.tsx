import { useState } from "react";
import TextField from "../../components/input/TextField";
import "./ForgotPassword.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordError = () => {
    setPasswordTouched(true);

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const email = localStorage.getItem("forgotEmail");

  const handleReset = async () => {
    try {
      setPasswordTouched(true);

      const isPasswordValid = validatePassword(password);

      setPasswordError(isPasswordValid ? "" : "Password is required");

      if (isPasswordValid) {
        await axios.post("http://localhost:5000/api/v1/auth/resetpassword", {
          email,
          password,
        });

        toast.success("Password Reset Succefully");
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed Reset Password");
    }
  };

  return (
    <div className="forgotOuter">
      <div className="forgotInner">
        <h2>Reset your Password</h2>
        <div className="textfile-box">
          <TextField
            className="textfield"
            type="password"
            placeholder="Enter you password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            onBlur={handlePasswordError}
          />
          {passwordTouched && passwordError && (
            <p className="error-text">{passwordError}</p>
          )}
        </div>
        <div className="button-box">
          <Button
            className="button"
            type="submit"
            name="RESET PASSWORD"
            onButtonClick={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
