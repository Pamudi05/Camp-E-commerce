import TextField from "../../components/input/TextField";
import "./ForgotPassword.css";
import Button from "../../components/button/Button";

const OTPPage = () => {
  return (
    <div className="forgotOuter">
      <div className="forgotInner">
        <h2>OTP</h2>
        <div>
          <div className="textfile-box">
            <TextField
              className="otpfield"
              type="text"
            />
          </div>
          <div className="textfile-box">
            <TextField
              className="otpfield"
              type="text"
            />
          </div>
          <div className="textfile-box">
            <TextField
              className="otpfield"
              type="text"
            />
          </div>
          <div className="textfile-box">
            <TextField
              className="otpfield"
              type="text"
            />
          </div>
        </div>

        <div className="button-box">
          <Button className="button" type="submit" name="VERIFY NOW" />
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
