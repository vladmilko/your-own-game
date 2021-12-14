const passport = require('passport');
const bcrypt = require('bcryptjs');
const passportLocal = require('passport-local');
const LocalStrategy = passportLocal.Strategy;

require('dotenv').config();

const User = require('../db/models/user');

exports.isUser = (req, res) => {
  console.log(req.user)
  try {
    res.json(
      req.user ? req.user : false
    );
  } catch(err) {
    console.log('Error');
  }
};

exports.signOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).end();
    res.clearCookie('sid');
    return res.status(200).end();
  }) 
};

passport.serializeUser(async (user, done) => {
  console.log('serializeUser', user.id);
  // записывает в сессию req.user = user.id и зашифровывает это в куку
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  User.findById(id, (err, user) => {
      // console.log(' DEserializeUser', user.name);
      done(err, { id: user.id, name: user.name });
    });
});

const UserAuth = async (req, email, pass, done) => {
  console.log('>>>>>>>>>>>>>>>PASSPORT<<<<<<<<<<<<<<<<<<<');
  const { name } = req.body;
  try {
    if (/signin/.test(req.path)) { // req.path --> /auth/signup
      const user = await User.findOne({ email }).exec();
      if (!user) return done(null, false, { message: 'user not found' });
      if (await bcrypt.compare(pass, user.password)) return done(null, user);
      return done(null, false, { message: 'password wrong' });
    }

    if (/signup/.test(req.path) && name && pass && email) { // req.path --> /auth/signup
      const hashPass = await bcrypt.hash(pass, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashPass,
      });
      done(null, newUser); //  в req.user  записываем  id  пользователя (см. 13-ю строку)
    } else {
      return done(null, false);
    }
  } catch (error) {
    done(error);
  }
};

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // переопределение полей email, password -  поля прилетевшего body
      passwordField: 'password',
      passReqToCallback: true,
    },
    UserAuth,
  ),
);