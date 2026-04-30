const router = require('express').Router();
router.get('/', (_req, res) => res.json([{ id: 1, name: 'Demo Project', members: 4 }]));
router.post('/', (req, res) => res.status(201).json({ id: Date.now(), ...req.body }));
router.get('/:id/tasks', (req, res) => res.json([{ id: 1, title: 'Setup repo', status: 'done', projectId: +req.params.id }]));
module.exports = router;
