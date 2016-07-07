'use strict';

var { combineReducers } = require('redux');

module.exports = combineReducers({
  login: require('./login')
});
