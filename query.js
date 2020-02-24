// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database


const queries = [

  // How many registered voters live in the Canton zip code (13617)?
  Voter.find().where('zipcode').equals('13617').countDocuments(),

  // What are the full names of all the registered voters whose first-name is STARR?
  Voter.find().where('fistname').equals('STARR'),

  // How many people voted in the 2016 general election (GE16)?
  Voter.find({'history' : {$regex:/GE16/}}).countDocuments(),

  // What is the last-name that comes last in the county in alphabetical order?
  Voter.find().sort('-lastname').limit(1),

  // How many zip codes does the county contain?
  Voter.distinct('zipcode').countDocuments()
];

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Num of voters in canton: ', results[0]);
    console.log('Full name of voterswith the first name STARR: ', results[1].map(p => p.firstname + ' ' + p.lastname));
    console.log('Num of people who voted in 2016 General Election: ', results[2]);
    console.log('Alphabetically last name in the county: ', results[3].map(p => p.lastname));
    console.log('Num of distinct zipcodes: ', results[4]);
    mongoose.connection.close();
  }).catch(error => console.error(error.stack));
