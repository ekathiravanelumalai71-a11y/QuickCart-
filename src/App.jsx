import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import CartPage from './components/CartPage.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import { products } from './data/products.js';
import './styles/App.css';

function App() {
  // Search is page-level UI state, while cart state lives in context.
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <div className="app">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <main className="main-content">
          {/* Route each URL to a page component (single-page app behavior). */}
          <Routes>
            <Route
              path="/"
              element={<HomePage products={products} searchTerm={searchTerm} />}
            />
            <Route path="/category/:category" element={<CategoryPage products={products} />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <CartSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;