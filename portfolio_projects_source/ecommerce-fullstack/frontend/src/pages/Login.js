import React, { useState } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, password });
      login(data.user, data.token);
    } catch (err) { alert(err.response?.data?.error || 'Login failed'); }
  };

  return (
    <main style={{ padding: 24, maxWidth: 360 }}>
      <h1>Login</h1>
      <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
