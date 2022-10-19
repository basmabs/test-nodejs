const express = require('express');
const passport = require('passport');
const { getCommand } = require('../Controllers/Commande_Controller');
const router = express.Router();
router.get('/commande', passport.authenticate('bearer', { session: false }), getCommand);
module.exports = router;
