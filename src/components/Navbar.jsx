import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">ShopEasy</Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/category/electronics" className="nav-link">Electronics</Link>
          <Link to="/category/jewelery" className="nav-link">Jewelry</Link>
          <Link to="/category/men's clothing" className="nav-link">Men</Link>
          <Link to="/category/women's clothing" className="nav-link">Women</Link>
        </div>

        <Link to="/cart" className="cart-button">
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;