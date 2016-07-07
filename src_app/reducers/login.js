'use strict';

import type { Action } from '../actions/types';

export type State = {
  isInitialised: bool;
};

const initial: State = {
  isInitialised: false
}

function login(state: State = initial, action: Action) : State {
  switch(action.type){
    case 'LOGIN_SET_LOADING':
      console.log("reducer LOGIN_SET_LOADING");
      return{
        ...state,
        isInitialised: true
      }
    default:
      return state;
  }
}

module.exports = login;
