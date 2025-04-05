import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { fetchProducts, fetchCategories } from '../services/API';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const { data: products, loading, error } = useFetch(fetchProducts);
  const { data: categories } = useFetch(fetchCategories);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setFeaturedProducts(products.slice(0, 8));
    }
  }, [products]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to ShopEasy</h1>
        <p>Discover amazing products at great prices</p>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories?.map(category => (
            <a 
              key={category} 
              href={`/category/${category}`}
              className="category-card"
            >
              {category.replace(/'/g, '').replace(' clothing', '')}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;