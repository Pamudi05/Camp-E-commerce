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

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password,
        },
      );

      toast.success("User Login Succefully");
      navigate('/layout')
      return response.data;
    } catch (error) {
      toast.error("Login Failed");
      console.error(error);
    }
  };
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
            />
            <TextField
              className="textfield"
              type="password"
              placeholder="Enter you password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot-box">
            <p>forgotPassowrd?</p>
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
