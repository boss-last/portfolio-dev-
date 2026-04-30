import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { items } = useCart();
  const { user, logout } = useAuth();
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16, background: '#111', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff' }}>Shop</Link>
      <Link to="/cart" style={{ color: '#fff', marginLeft: 'auto' }}>Cart ({items.length})</Link>
      {user ? <button onClick={logout}>Logout</button> : <Link to="/login" style={{ color: '#fff' }}>Login</Link>}
    </nav>
  );
}
