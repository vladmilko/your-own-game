const passport = require('passport');
const { isUser, signOut, } = require('../controllers/authController');
const router = require('express').Router();

router.get('/isUser', isUser);

router
  .route('/signin')
  .post(passport.authenticate('local'), isUser);

router
  .route('/signup')
  .post(passport.authenticate('local'), isUser);

router.get('/signout', signOut);

module.exports = router;