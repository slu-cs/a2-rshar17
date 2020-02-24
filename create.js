const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect();
const fs = require('fs');
const readline = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});
const arr = [];

file.on('line', function(line){
  const data = line.split(',');
  arr.push(new Voter({
  'firstname': data[0],
  'lastname': data[1],
  'zipcode': data[2],
  'history': data[3]
}));
});







// Reset the data
file.on('close', function() {
mongoose.connection.dropDatabase()
  .then(() => Promise.all(arr.map(d => d.save()))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
});
