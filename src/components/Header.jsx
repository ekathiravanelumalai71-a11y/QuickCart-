import '../styles/Header.css';

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <p className="eyebrow">QuickCart Preview</p>
            <h1 className="header-title">QuickCart</h1>
            <p className="header-subtitle">A lightweight shopping preview with a responsive product grid.</p>
          </div>
          <button type="button" className="cart-icon-btn" onClick={onCartClick} aria-label="Open cart">
            <span aria-hidden="true">🛒</span>
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;