import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import search from './search/searchReducers';

const appReducer = combineReducers({
    ui,
    search
});

export default function(state, action) {
  return appReducer(state, action);
}
