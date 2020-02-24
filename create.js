const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect();


const holder = [];

Voter.on('line', function(line) {
  const columns = line.split(',');
  holder.push({
    firstname: columns[0],
    lastname: columns[1],
    zipcode: columns[2],
    history: columns[3]

  });
});
