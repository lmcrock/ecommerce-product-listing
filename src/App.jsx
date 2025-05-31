import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const allProducts = [
    {
      id: 1,
      name: 'Sleek Chair',
      price: '$49.99',
      description: 'Ergonomic and stylish.',
      image: '/images/chair.jpg',
      category: 'Furniture'
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: '$29.99',
      description: 'Smooth and responsive.',
      image: '/images/mouse.jpg',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: '$89.99',
      description: 'Rich sound quality.',
      image: '/images/speaker.jpg',
      category: 'Electronics'
    }
  ];

  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category === category);
      setProducts(filtered);
    }
  };

  return (
    <div className="App">
      <h1>E-Commerce Product Listing</h1>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => filterByCategory('All')}>All</button>
        <button onClick={() => filterByCategory('Furniture')}>Furniture</button>
        <button onClick={() => filterByCategory('Electronics')}>Electronics</button>
      </div>

      <ProductList products={products} />
    </div>
  );
}

export default App;
