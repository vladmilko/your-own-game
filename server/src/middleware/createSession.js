const session = require('express-session'); // библиотека для работы с сессиями// cookie-parser уже включен в express-session
const MongoStore = require('connect-mongo');
require('dotenv').config();

// записывает переменную req.session.user,
// данные из session storage, относящиеся к прилетевшей куке.
//  если куки нету или она не найдена в session storage - req.session.user -> unfefined
module.exports = session({
  name: 'sid', // название куки
  store: MongoStore.create({
    mongoUrl: process.env.SESSION_DB_PATH,
    ttl: 14 * 24 * 60 * 60,
  }),
  // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  secret: process.env.SESSION_SECRET,

  // Если true,  пересохраняет сессию, даже если она не поменялась
  resave: false,

  // Если false, куки появляются только при установке req.session
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
});

// require('dotenv').config();

// const session = require('express-session');
// const FileStore = require('session-file-store')(session); 

// module.exports = session({
//   name: 'sid',
//   store: new FileStore({}),
//   secret: process.env.COOKIE_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60 * 60 * 24 * 10,
//   },
// })
