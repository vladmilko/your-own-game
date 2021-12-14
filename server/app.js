const express = require('express');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const cors = require('cors');

const session = require('./src/middleware/createSession');
const isUser = require('./src/middleware/isUser');

const authRouter = require('./src/routes/auth');
const RoundRouter = require('./src/routes/round');
const GameRouter = require('./src/routes/game');
const UserRouter = require('./src/routes/user');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(session);

app.use(passport.initialize()); // этот мидлвер необходим для корректной работы passport
app.use(passport.session()); // этот мидлвер необходим для корректной работы passport

app.use(isUser);

app.use('/auth', authRouter);
app.use('/round', RoundRouter);
app.use('/game', GameRouter);
app.use('/user', UserRouter);

module.exports = app;
