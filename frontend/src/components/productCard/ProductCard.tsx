import "./ProductCard.css";
import pro from "../../images/pro-1.png";

interface ProductCardProps {
  buttonText: string;
  onButtonClick?: () => void;
}

const ProductCard = ({ buttonText, onButtonClick } : ProductCardProps) => {
  return (
    <div className="productCard-outer">
      <div className="productCard-image">
        <img src={pro} alt="product-image" />
      </div>
      <div className="productCard-details">
        <span>Tent</span>
        <span>Rs.1500.00</span>
      </div>
      <div onClick={onButtonClick} className="productCard-button">{buttonText}</div>
    </div>
  );
};

export default ProductCard;
