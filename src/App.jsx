import { useState } from 'react';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import { products } from './data/products.js';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      </main>
    </div>
  );
}

export default App;