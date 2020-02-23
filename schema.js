
// Schema to collect voter data
const mongoose = require('mongoose');

const Voter = new mongoose.Schema({
  firstname: String,
  lastname: String,
  zipcode: Number,
  history: String
});
Voter.index({firstname: 1});
Voter.index({lastname: 1});
Voter.index({zipcode: 1});
Voter.index({history: 1});

module.exports = mongoose.model('Voter', Voter);
