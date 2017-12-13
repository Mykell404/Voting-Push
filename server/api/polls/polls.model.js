'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollsSchema = new Schema({
  name: String,
  options: Object,
  fullName: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Polls', PollsSchema);