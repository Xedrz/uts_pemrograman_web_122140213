import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ShopEasy</h3>
          <p>Your one-stop shop for all your needs</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/category/electronics">Electronics</a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@shopeasy.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;