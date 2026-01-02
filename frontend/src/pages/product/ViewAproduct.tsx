import NavBar from "../../components/navBar/NavBar";
import "./ViewAproduct.css";
import pro from "../../images/pro-1.png";
import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
import Button from "../../components/button/Button";

const ViewAproduct = () => {
  return (
    <div className="product-outer">
      <NavBar />
      <div className="a-product">
        <div className="a-product-left">
          <div className="img-box-1">
            <img src={pro} alt="pic" />
          </div>
          <div className="a-product-left-inner">
            <div className="img-box-2">
              <img src={pro} alt="pic" />
            </div>
            <div className="img-box-2">
              <img src={pro} alt="pic" />
            </div>
            <div className="img-box-2">
              <img src={pro} alt="pic" />
            </div>
          </div>
        </div>
        <div className="a-product-right">
          <div>
            <h4>Product Name :</h4>
            <p>Tent</p>
          </div>
          <div>
            <h4>Product Price :</h4>
            <p>Rs.1500.00</p>
          </div>
          <div>
            <h4>Product Description :</h4>
          </div>
          <div>
            <p className="description-p">
              Our tents are made with high-quality materials to provide reliable
              shelter, ventilation, and comfort in all weather conditions.
            </p>
          </div>
          <div>
            <h4>Product Quantity :</h4>
            <div className="qty">
              <div className="a-box-1">
                <img src={minus} alt="minus" />
              </div>
              <div className="a-box-2">1</div>
              <div className="a-box-1">
                <img src={plus} alt="plus" />
              </div>
            </div>
          </div>
          <div>
            <Button className="view-button" type="submit" name="Add To Cart"/>
            <Button className="view-button-2" type="submit" name="Place Order"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAproduct;
