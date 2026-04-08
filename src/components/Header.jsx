import { Link } from 'react-router-dom';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import '../styles/Header.css';

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart();
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Link to="/" className="header-logo">
            <h1 className="header-title">QuickCart</h1>
          </Link>

          <button type="button" className="cart-icon-btn" onClick={toggleCart} aria-label="Open cart">
            <span aria-hidden="true">🛒</span>
            {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
          </button>
        </div>

        <p className="header-subtitle">Find products quickly, browse by category, and keep your cart synced.</p>

        <nav className="header-nav" aria-label="QuickCart sections">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {categories.map((category) => (
            <Link key={category} to={`/category/${category}`} className="nav-link">
              {category}
            </Link>
          ))}
          <Link to="/cart" className="nav-link">
            Cart Page
          </Link>
        </nav>

        <div className="search-container">
          <label htmlFor="search-products" className="sr-only">
            Search products
          </label>
          <input
            id="search-products"
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button type="button" className="search-clear-btn" onClick={() => onSearchChange('')}>
              Clear
            </button>
          )}
        </div>

        <p className="eyebrow">Final QuickCart Build</p>
      </div>
    </header>
  );
}

export default Header;