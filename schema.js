
// Schema to collect voter data
const schema = require('voters');
const fs = require('fs');
const Voter = new schema{
  firstname: String,
  lastname: String,
  zipcode: Number,
  history: String
};
Voter.index({firstname: 1});
Voter.index({lastname: 1});
Voter.index({zipcode: 1});
Voter.index({history: 1});
