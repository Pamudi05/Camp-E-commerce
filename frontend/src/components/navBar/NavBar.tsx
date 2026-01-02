import "./NavBar.css";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";
import close from "../../images/close.png";
import arrowDown from "../../images/arrow-down.png";
import person from "../../images/person.webp";
import light from "../../images/light_mode.png";
import dark from "../../images/dark_mode.png";
import logout from "../../images/logout.png";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="logo" />
        <span>Adventure Starts Here</span>
      </div>
      <div className="right">
        <img
          className="menuicon"
          src={open ? close : menu}
          alt="menu"
          onClick={() => setOpen(!open)}
        />
        <ul className={open ? "menu open" : "menu"}>
          <li>
            <Link to="/layout">HOME</Link>
          </li>
          <li>
            <Link to="/images">IMAGES</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li>
            {!open ? (
              <div
                className="person-box"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="personCircle">
                  <img src={person} alt="person" />
                  {profileOpen && (
                    <div className="profile-menu">
                      <ul>
                        <li>
                          <Link to="/profile">PROFILE</Link>
                        </li>
                        <li className="pro-inner">
                          <div>
                            <span>APPEARANCE</span>
                            <img src={light} alt="" />
                          </div>
                        </li>
                        <li className="pro-inner">
                          <div>
                            <span>LOGOUT</span>
                            <img src={logout} alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <img src={arrowDown} alt="arrow down" />
              </div>
            ) : (
              <Link to="/setting">SETTING</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
