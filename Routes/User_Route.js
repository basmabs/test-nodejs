const express = require('express');
const passport = require('passport');
const { User, login, deleteUser, updateUser } = require('../Controllers/User_Controller');
const router = express.Router();
router.post('/register', User);
router.post('/login', login);
router.get('/profile', passport.authenticate('bearer', { session: false }),
  function (req, res) {
    res.send(req.user)
  });
router.delete('/deleteuser/:iduser', passport.authenticate('bearer', { session: false }), deleteUser);
router.put('/updateuser/iduser', passport.authenticate('bearer', { session: false }), updateUser);
module.exports = router;