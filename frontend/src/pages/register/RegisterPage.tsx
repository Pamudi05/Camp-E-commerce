import { Link } from "react-router-dom";
import "./RegisterPage.css";
import TextField from "../../components/input/TextField";
import Button from "../../components/button/Button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterPage = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/create",
        {
          email,
          name,
          phoneNumber,
          password,
        }
      );

      setEmail("");
      setName("");
      setPhoneNumber("");
      setPassword("");

      toast.success("User Registered Succefully");
      return response.data;
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
            />
            <TextField
              type="text"
              placeholder="Name"
              className="textfield"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              type="number"
              placeholder="Contact Number"
              className="textfield"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              type="password"
              placeholder="Password"
              className="textfield"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
