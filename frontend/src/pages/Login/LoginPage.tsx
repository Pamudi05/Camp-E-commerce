import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import TextField from "../../components/input/TextField";
import Button from "../../components/button/Button";

const LoginPage = () => {
  const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/layout");
    }
  return (
    <div className="loginOuter">
      <div className="loginInner">
        <div className="loginLeft element"></div>
        <div className="loginRight element">
            <h2 className="heading">LOGIN</h2>
            <div className="textfile-box">
                <TextField className="textfield" type="email" placeholder="Enter you email"/>
                <TextField className="textfield" type="password" placeholder="Enter you password"/>
            </div>
            <div className="forgot-box">
              <p>forgotPassowrd?</p>
            </div>
            <div className="button-box">
              <Button onButtonClick={handleNavigate} className="button" type="submit" name="LOGIN"/>
            </div>
            <div className="bottom-box">
              <p>Create an account? <span><Link to='/register'>SignUp</Link></span></p>
            </div>
        </div>
        </div>
      </div>
  );
};

export default LoginPage;
