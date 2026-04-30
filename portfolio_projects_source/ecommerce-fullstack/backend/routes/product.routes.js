const router = require('express').Router();
const db = require('../config/db');
const { authenticate, requireAdmin } = require('../middleware/auth');

router.get('/', async (_req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM products ORDER BY id DESC');
    res.json(rows);
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [req.params.id]);
    rows[0] ? res.json(rows[0]) : res.status(404).json({ error: 'Not found' });
  } catch (err) { next(err); }
});

router.post('/', authenticate, requireAdmin, async (req, res, next) => {
  try {
    const { name, description, price, stock, image_url, category_id } = req.body;
    const [r] = await db.execute(
      'INSERT INTO products (name, description, price, stock, image_url, category_id) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, price, stock, image_url, category_id]
    );
    res.status(201).json({ id: r.insertId });
  } catch (err) { next(err); }
});

module.exports = router;
