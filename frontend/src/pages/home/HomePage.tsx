import "./HomePage.css";
import top from "../../images/top-1.png";
import NavBar from "../../components/navBar/NavBar";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/products");
    }
    
  return (
    <div className="homeOuter" id="homepage">
      <div className="homeInner">
        <div className="navWrapper">
          <NavBar />
        </div>
        <div className="homeBackground">
          <img src={top} alt="background_image" />
          <div className="homTextContainer">
            <p className="homeText heading">
              Gear Up for Your Next Outdoor Adventure
            </p>
            <p className="homeText subheading">
              Premium camping equipment designed for <br />
              comfort, safety, and unforgettable
              <br /> experiences in the wild.
            </p>
            <div className="homeButton">
              <Button onButtonClick={handleNavigate} className="button" name="Shop Now" />
            </div>
          </div>
        </div>
        <div className="homeBox"></div>
      </div>
    </div>
  );
};

export default HomePage;
