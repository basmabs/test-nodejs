const User = require('../Models/User_Model');
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');
passport.use(new BearerStrategy((token, done) => {
  const decodingData = jwt.verify(token, process.env.JWT_SECRET)
  User.findOne({ _id: decodingData.idUser }, function (err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    return done(null, user, { scope: `all` })
  })
}
));