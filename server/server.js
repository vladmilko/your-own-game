const app = require('./app');
const { connectDB } = require('./src/db/config');
require('dotenv').config();

connectDB();
const port = process.env.SERVER_PORT ?? 3000;

app.listen(port, () => {
  console.log('Server started at http://localhost:%s/', port);
});
