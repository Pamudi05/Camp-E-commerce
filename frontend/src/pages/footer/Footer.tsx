import "./Footer.css";
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png"
import whatapp from "../../images/whatsapp.png";
import youtube from "../../images/youtube.png";
import x from "../../images/x.png";
import line from "../../images/horizontal.png";

const Footer = () => {
  return (
    <div className="footer-outer">
      <div className="footer-inner">
        <div className="top">
          <img src={logo} alt="logo" />
          <span>Adventure Starts Here</span>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <div>
              <span>Contact Number</span>
              <span>070 39 89 123</span>
            </div>
            <div>
              <span>Address</span>
              <span>No. 123 / 1, <br />Camp p,<br /> Colombo,<br /> Sri Lanka.</span>
            </div>
          </div>
          <div className="bottom-right">
            <img style={{width: '200px'}} src={line} alt="facebook" />
            <img src={facebook} alt="facebook" />
            <img src={whatapp} alt="whatapp" />
            <img src={youtube} alt="youtube" />
            <img src={x} alt="x" />
            <img style={{width: '200px'}} src={line} alt="x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
