// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database


const queries = [

  // How many registered voters live in the Canton zip code (13617)?
  Voter.find().where('lastname').equals('WIG')

  // What are the full names of all the registered voters whose first-name is STARR?
  //Voter.find().where('fistname').equals('STARR').get('firstname').get('lastname'),

  // How many people voted in the 2016 general election (GE16)?
  //Voter.find().where('started').equals(2003),

  // What is the last-name that comes last in the county in alphabetical order?
  //Voter.find().where('courses').in(362),

  // How many zip codes does the county contain?
  //Voter.distinct('rank')
];

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Names in order: ', results[0].map(p => p.name));
    //console.log('Started most recently: ', results[1].map(p => p.name));
    //console.log('Started in 2003: ', results[2].map(p => p.name));
    //console.log('Teaches 362: ', results[3].map(p => p.name));
    //console.log('Distinct ranks: ', results[4]);
    mongoose.connection.close();
  }).catch(error => console.error(error.stack));
