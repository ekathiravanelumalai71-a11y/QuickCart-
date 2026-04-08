import React from 'react';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import { products } from './data/products.js';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;