import { combineReducers } from 'redux';
import ui from './ui/uiReducers';

const appReducer = combineReducers({
    ui
});

export default function(state, action) {
  return appReducer(state, action);
}
