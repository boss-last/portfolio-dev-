const router = require('express').Router();
const db = require('../config/db');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, async (req, res, next) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
      [req.user.id]
    );
    res.json(rows);
  } catch (err) { next(err); }
});

router.post('/', authenticate, async (req, res, next) => {
  try {
    const { items, shipping_address, total } = req.body;
    const [order] = await db.execute(
      'INSERT INTO orders (user_id, total, status, shipping_address) VALUES (?, ?, ?, ?)',
      [req.user.id, total, 'pending', shipping_address]
    );
    for (const it of items) {
      await db.execute(
        'INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (?, ?, ?, ?)',
        [order.insertId, it.product_id, it.quantity, it.unit_price]
      );
    }
    res.status(201).json({ id: order.insertId });
  } catch (err) { next(err); }
});

module.exports = router;
