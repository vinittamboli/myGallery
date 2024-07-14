const express = require('express');
const router = express.Router();

// Placeholder for future gallery routes
router.get('/', (req, res) => {
    res.json({ message: 'Gallery endpoint' });
});

module.exports = router;
