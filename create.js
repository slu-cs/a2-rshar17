const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect();

const arr = [];

const rows = connect.split('\n');
const data = rows[0].split(',');










// Reset the data
mongoose.connection.dropDatabase()
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
