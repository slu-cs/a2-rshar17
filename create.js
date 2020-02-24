const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});
connect();

const arr = [];

file.on('line', function(line){
  const row = line.split(',');
  const voterone = new Voter({
   firstname:  row[0],
   lastname:  row[1],
   zipcode:  row[2],
   history:  row[3]
 });
 arr.push(voterone);
});







// Reset the data
file.on('close', function() {
mongoose.connection.dropDatabase()
  .then(() => Promise.all(arr.map(p => p.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
});
