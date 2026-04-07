function Cart({ cart, removeFromCart, clearCart }) {
  return (
    <section aria-labelledby="cart-heading">
      <h2 id="cart-heading">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                <span>{item.name}</span> - <span>${item.price.toFixed(2)}</span>{' '}
                <button type="button" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button type="button" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;
