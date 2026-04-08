import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const CartContext = createContext(undefined);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}

export function CartProvider({ children }) {
  // Cart is persisted to localStorage so it survives refreshes.
  const [cart, setCart] = useLocalStorage('quickcart-cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 120);
    return () => window.clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // If the product already exists, increment quantity instead of duplicating.
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    // Keep all items except the removed product.
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    // Quantity 0 means remove from cart.
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleCart = () => {
    setIsCartOpen((prevOpen) => !prevOpen);
  };

  const getTotalItems = () => {
    // Add all item quantities for the cart badge.
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    // Sum of (price * quantity) for all cart items.
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value = useMemo(
    () => ({
      cart,
      isCartOpen,
      isLoading,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleCart,
      getTotalItems,
      getTotalPrice,
    }),
    [cart, isCartOpen, isLoading]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
