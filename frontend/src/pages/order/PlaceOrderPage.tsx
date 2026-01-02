import Button from "../../components/button/Button";
import TextFiled from "../../components/input/TextField";
import NavBar from "../../components/navBar/NavBar";
import "../product/ProductPage.css";
import "./PlaceOrderPage.css";

const PlaceOrderPage = () => {
  return (
    <div className="product-outer">
      <NavBar />
      <div className="allProducts">
        <div className="top-bar">
          <p>PLACE ORDER</p>
        </div>
        <div className="order-bar">
          <div className="order-bar-left">
            <div>
              <label>Name</label>
              <TextFiled className="textfield" placeholder="enter your name" />
            </div>
            <div>
              <label>Address</label>
              <TextFiled className="textfield" placeholder="enter your address" />
            </div>
            <div>
              <label>email (Optional)</label>
              <TextFiled className="textfield" type="email" placeholder="enter your email" />
            </div>
            <div>
              <label>Contact Number</label>
              <TextFiled className="textfield" placeholder="enter your contact number" />
            </div>
          </div>
          <div className="order-bar-right">
            <div>
              <h4>Product Name :</h4>
              <p>Tent</p>
            </div>
            <div>
              <h4>Product Quantity :</h4>
              <p>3</p>
            </div>
            <div>
              <h4>Total Price :</h4>
              <p>Rs.4500.00</p>
            </div>
            <div>
                <p></p>
              <Button
                className="view-button-2"
                type="submit"
                name="Place Order"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
