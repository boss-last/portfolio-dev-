import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));

  const persist = (next) => {
    setItems(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  const addItem = (product) => {
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      persist(items.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      persist([...items, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => persist(items.filter((i) => i.id !== id));
  const clear = () => persist([]);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
