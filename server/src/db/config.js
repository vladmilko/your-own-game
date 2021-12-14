const { connect, disconnect } = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    await connect(process.env.DB_PATH, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Mongoose connected to database');
  } catch (err) { console.error('Unable to connect to the database: ', err.message); }
}

async function disconnectDB() {
  try {
    await disconnect();

    console.log('Disconnected from %s database', process.env.DB_PATH);
  } catch (err) { console.log('Unable to disconnect from the database: ', err); }
}

module.exports = {connectDB, disconnectDB}
