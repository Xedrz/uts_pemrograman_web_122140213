import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { fetchProductsByCategory } from '../services/API';
import ProductCard from '../components/ProductCard';
import './Categories.css';

const Categories = () => {
  const { category } = useParams();
  const { data: products, loading, error } = useFetch(fetchProductsByCategory, category);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="category-page">
      <h1 className="category-title">
        {category.replace(/'/g, '').replace(' clothing', '')}
      </h1>
      
      <div className="products-grid">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;