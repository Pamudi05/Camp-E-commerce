import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import TextField from "../../components/input/TextField";
import Button from "../../components/button/Button";

const RegisterPage = () => {
   const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }
    
  return (
    <div className="registerOuter">
      <div className="registerInner">
        <div className="registerLeft element"></div>
        <div className="registerRight element">
          <h2 className="heading">REGISTER</h2>
          <div className="textfile-box">
            <TextField type="email" placeholder="Email" className="textfield" />
            <TextField type="text" placeholder="Name" className="textfield" />
            <TextField
              type="number"
              placeholder="Contact Number"
              className="textfield"
            />
            <TextField
              type="password"
              placeholder="Password"
              className="textfield"
            />
          </div>
          <div className="button-box">
            <Button onButtonClick={handleNavigate} className="button" type="submit" name="REGISTER" />
          </div>
          <div className="bottom-box">
            <p>
              Already have an account?{" "}
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
