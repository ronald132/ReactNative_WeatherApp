'use strict';

import type { Action } from './types';

function doLogin() {
  return {
    type: 'LOGIN_SET_LOADING',
    data: 'hello'
  };
}

module.exports = {
  doLogin
}
