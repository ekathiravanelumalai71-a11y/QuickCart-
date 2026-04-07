import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <p className="eyebrow">QuickCart Preview</p>
        <h1 className="header-title">QuickCart</h1>
        <p className="header-subtitle">A lightweight shopping preview with a responsive product grid.</p>
      </div>
    </header>
  );
}

export default Header;