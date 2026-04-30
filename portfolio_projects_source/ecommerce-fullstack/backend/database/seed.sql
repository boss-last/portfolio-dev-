-- Seed data for local development
USE ecommerce_db;

INSERT INTO categories (name, slug)
VALUES
  ('Electronics', 'electronics'),
  ('Fashion', 'fashion'),
  ('Home', 'home')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- Basic products so the frontend has something to render
INSERT INTO products (name, description, price, stock, image_url, category_id)
SELECT 'Wireless Headphones', 'Noise-cancelling over-ear headphones', 129.99, 25, NULL, c.id
FROM categories c
WHERE c.slug = 'electronics'
  AND NOT EXISTS (SELECT 1 FROM products p WHERE p.name = 'Wireless Headphones');

INSERT INTO products (name, description, price, stock, image_url, category_id)
SELECT 'Cotton T-Shirt', 'Soft cotton t-shirt, unisex', 19.99, 100, NULL, c.id
FROM categories c
WHERE c.slug = 'fashion'
  AND NOT EXISTS (SELECT 1 FROM products p WHERE p.name = 'Cotton T-Shirt');

INSERT INTO products (name, description, price, stock, image_url, category_id)
SELECT 'Ceramic Mug', '350ml ceramic mug', 9.99, 60, NULL, c.id
FROM categories c
WHERE c.slug = 'home'
  AND NOT EXISTS (SELECT 1 FROM products p WHERE p.name = 'Ceramic Mug');
