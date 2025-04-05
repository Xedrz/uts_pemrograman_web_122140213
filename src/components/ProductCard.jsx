import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rating">
            {'⭐'.repeat(Math.round(product.rating.rate))} 
            ({product.rating.count})
          </div>
        </div>
      </Link>
      <button 
        onClick={() => addToCart(product)}
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;