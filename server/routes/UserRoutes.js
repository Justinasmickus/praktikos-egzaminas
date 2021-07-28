const express = require('express');
const UserModel = require('../models/User');
const router = express.Router();

//creating new user

router.post('/api/user/new', async (req, res) => {
  const gotNewUserData = req.body;
  console.log('gotNewUserData', gotNewUserData);
  const newUser = new UserModel(gotNewUserData);
  try {
    const creatingNewUserResult = await newUser.save();
    res.json(creatingNewUserResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
