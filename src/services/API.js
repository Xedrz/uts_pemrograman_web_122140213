const API_BASE = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE}/products`);
  return await response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE}/products/${id}`);
  return await response.json();
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${API_BASE}/products/category/${category}`);
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_BASE}/products/categories`);
  return await response.json();
};