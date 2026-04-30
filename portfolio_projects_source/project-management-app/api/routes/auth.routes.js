const router = require('express').Router();
router.post('/login', (_req, res) => res.json({ token: 'demo-token', user: { id: 1, role: 'admin' } }));
router.post('/register', (_req, res) => res.status(201).json({ id: 1 }));
module.exports = router;
