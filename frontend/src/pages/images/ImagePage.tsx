import NavBar from "../../components/navBar/NavBar";
import "./ImagePage.css";
import pro2 from "../../images/pro-2.jpeg";
import pro3 from "../../images/pro-3.webp";
import pro4 from "../../images/pro-4.jpg";
import pro5 from "../../images/pro-5.jpeg";
import pro6 from "../../images/pro-6.jpg";

const ImagePage = () => {
  return (
    <div className="product-outer">
      <NavBar />
      <div className="allProducts">
        <div className="top-bar">
          <p>IMAGES</p>
        </div>
        <div className="images-bar">
          <div className="image-heading">
            <h2>Real moments from adventurers</h2>
          </div>
          <div className="images-container">
            <img src={pro6} alt="pic" className="img-small" />
            <img src={pro2} alt="pic" className="img-small" />
            <img src={pro3} alt="pic" className="img-small" />
            <img src={pro4} alt="pic" className="img-small" />
            <img src={pro5} alt="pic" className="img-small" />

            <img src={pro3} alt="pic" className="img-small" />
            <img src={pro5} alt="pic" className="img-small" />
            <img src={pro4} alt="pic" className="img-small" />
            <img src={pro6} alt="pic" className="img-small" />
            <img src={pro2} alt="pic" className="img-small" />

            <img src={pro5} alt="pic" className="img-small" />
            <img src={pro2} alt="pic" className="img-small" />
            <img src={pro3} alt="pic" className="img-small" />
            <img src={pro4} alt="pic" className="img-small" />
            <img src={pro6} alt="pic" className="img-small" />

            <img src={pro4} alt="pic" className="img-small" />
            <img src={pro5} alt="pic" className="img-small" />
            <img src={pro3} alt="pic" className="img-small" />
            <img src={pro6} alt="pic" className="img-small" />
            <img src={pro2} alt="pic" className="img-small" />

            <img src={pro3} alt="pic" className="img-small" />
            <img src={pro5} alt="pic" className="img-small" />
            <img src={pro2} alt="pic" className="img-small" />
            <img src={pro6} alt="pic" className="img-small" />
            <img src={pro4} alt="pic" className="img-small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
