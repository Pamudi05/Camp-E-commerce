import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import ProductCard from "../../components/productCard/ProductCard";
import './ProductPage.css';

const ProductPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/carts");
    }

    return(
        <div className="product-outer">
            <NavBar/>
            <div className="allProducts">
                <div className="top-bar">
                    <p>PRODUCTS</p>
                </div>
                <div className="product-bar">
                    <ProductCard onButtonClick={handleNavigate} buttonText="Add To Cart"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Add To Cart"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Add To Cart"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Add To Cart"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Add To Cart"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Add To Cart"/>
                    <ProductCard onButtonClick={handleNavigate} buttonText="Add To Cart"/>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;