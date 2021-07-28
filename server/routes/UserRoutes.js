const express = require('express');
const router = express.Router();

//creating new user

router.post('/api/user/new', (req, res) => {
  res.json('about to create a new user');
});

module.exports = router;
