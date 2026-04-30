const router = require('express').Router();
router.patch('/:id', (req, res) => res.json({ id: +req.params.id, ...req.body }));
module.exports = router;
