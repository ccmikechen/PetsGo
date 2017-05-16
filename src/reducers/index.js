import { combineReducers } from 'redux';
import test from './test';

const appReducer = combineReducers({
    test
});

export default function(state, action) {
  return appReducer(state, action);
}
