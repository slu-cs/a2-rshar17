const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect();

const arr = [];

//this was done using 1
const rows = Voter.split('\n');
const data = rows.map(b => b.split(','));

for(const rows of rows)
{
  for(const data of datas)
  {
    arr.push({
      'firstname': data[0];
      'lastname': data[1];
      'zipcode': data[2];
      'history': data[3];
    })
  }

}










// Reset the data
mongoose.connection.dropDatabase()
  .then(() => arr.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
