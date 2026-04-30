import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => { api.get('/products').then((r) => setProducts(r.data)).catch(console.error); }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Featured Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {products.map((p) => (
          <article key={p.id} style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
            {typeof p.image_url === 'string' && p.image_url.trim() && p.image_url.trim().toLowerCase() !== 'null' ? (
              <img src={p.image_url} alt={p.name} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
            ) : (
              <div
                role="img"
                aria-label={`${p.name} (no image)`}
                style={{
                  width: '100%',
                  height: 160,
                  display: 'grid',
                  placeItems: 'center',
                  background: '#f6f7f8',
                  color: '#666',
                  borderRadius: 6
                }}
              >
                No image
              </div>
            )}
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
