import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { fetchProductById } from '../services/API';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(fetchProductById, id);
  const { addToCart, cartItems } = useCart();

  const isInCart = cartItems.some(item => item.id === product?.id);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.image} alt={product.title} className="main-image" />
      </div>
      
      <div className="product-info">
        <h1>{product.title}</h1>
        
        <div className="product-meta">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-rating">
            {'⭐'.repeat(Math.round(product.rating.rate))} 
            ({product.rating.count} reviews)
          </span>
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-actions">
          <button 
            onClick={() => addToCart(product)}
            className={`add-to-cart ${isInCart ? 'in-cart' : ''}`}
            disabled={isInCart}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
        
        <div className="product-details-meta">
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;