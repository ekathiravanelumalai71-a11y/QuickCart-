import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import '../styles/CartPage.css';

function CartPage() {
  // Read everything needed from global cart context.
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <section className="cart-page" aria-labelledby="cart-page-title">
      <h1 id="cart-page-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your cart is empty.</p>
          <Link to="/" className="continue-link">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-page-content">
          <div className="cart-items-list">
            {/* Render each item currently in the cart. */}
            {cart.map((item) => (
              <article key={item.id} className="cart-page-item">
                <img src={item.image} alt={item.name} />

                <div className="cart-page-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <p className="item-subtotal">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        type="button"
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total</span>
              <strong>${getTotalPrice().toFixed(2)}</strong>
            </div>
            <Link to="/" className="continue-link">
              Continue Shopping
            </Link>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}

export default CartPage;
