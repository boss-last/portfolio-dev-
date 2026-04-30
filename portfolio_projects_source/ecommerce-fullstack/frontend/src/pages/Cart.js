import React from 'react';
import { useCart } from '../context/CartContext';
export default function Cart() {
  const { items, total, removeItem, clear } = useCart();
  return (
    <main style={{ padding: 24 }}>
      <h1>Your Cart</h1>
      {items.length === 0 ? <p>Empty</p> : items.map((i) => (
        <div key={i.id}>{i.name} × {i.quantity} <button onClick={() => removeItem(i.id)}>Remove</button></div>
      ))}
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
      {items.length > 0 && <button onClick={clear}>Clear</button>}
    </main>
  );
}
