import "./AboutUs.css";
import arewe from '../../images/who-are-we.jpeg';
import mission from '../../images/mission-vision.jpg';

const AboutUs = () => {
  return (
    <div className="about-outer" id="aboutUs">
      <div className="about-inner">
        <div className="span-div"> 
          <span className="about-headTeaxt">Built for adventure. Trusted by explorers.</span>
        </div>

        <div className="are-div"> 
            <div className="left-div">
                <img src={arewe} alt="pic" />
            </div>
            <div className="right-div">
                <span className="heading">Who We Are</span>
                <span className="subheading">We are a dedicated outdoor and camping equipment store committed to supporting adventurers of all levels. From weekend campers to experienced hikers, we provide reliable, high-quality gear designed to make every outdoor experience safe, comfortable, and memorable.</span>
            </div>
        </div>
        <br />
        <br />

        <div className="are-div"> 
            <div className="right-div">
                <span className="heading">Our Mission</span>
                <span className="subheading mission">To provide durable, affordable, and high-performance camping equipment that empowers people to explore nature with confidence.</span>
               <br />
                <span className="heading">Our Vision</span>
                <span className="subheading mission">To become a trusted brand for outdoor enthusiasts by promoting adventure, sustainability, and a deeper connection with nature.</span>
            </div>
            <div className="left-div left-mission">
                <img src={mission} alt="pic" />
            </div>
        </div>

        <div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
