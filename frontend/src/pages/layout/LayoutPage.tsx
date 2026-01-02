import AboutUs from "../about/AboutUs";
import HomePage from "../home/HomePage";
import Footer from "../footer/Footer";

const LayoutPage = () => {

  return (
    <div className="layoutOuter">
      <div>
        <HomePage />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPage;
