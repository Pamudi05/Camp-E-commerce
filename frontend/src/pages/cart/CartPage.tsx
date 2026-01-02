import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import NavBar from "../../components/navBar/NavBar";
import ProductCard from "../../components/productCard/ProductCard";
import '../product/ProductPage.css';
import './CartPage.css';

const CartPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/placeorder");
    }
    return(
        <div className="product-outer">
            <NavBar/>
            <div className="allProducts">
                <div className="top-bar">
                    <p>CART</p>
                </div>
                <div className="product-bar">
                    <ProductCard onButtonClick={handleNavigate} buttonText="Place Order"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Place Order"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Place Order"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Place Order"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Place Order"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Place Order"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Place Order"/>
                </div>
                <div className="bottom-bar">
                    <Button className="view-button" type="button" name="All Order"/>
                    <Button className="view-button-2" type="button" name="Clear All"/>
                </div>
            </div>
        </div>
    );
}

export default CartPage;