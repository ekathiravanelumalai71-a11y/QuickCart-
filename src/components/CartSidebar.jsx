import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button type="button" onClick={onClose} className="close-btn" aria-label="Close cart">
          x
        </button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />

              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <div className="quantity-controls">
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  aria-label={`Decrease quantity for ${item.name}`}
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  aria-label={`Increase quantity for ${item.name}`}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)}
                aria-label={`Remove ${item.name}`}
              >
                x
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      )}
    </aside>
  );
}

export default CartSidebar;
