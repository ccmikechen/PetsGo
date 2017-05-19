import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import search from './search/searchReducers';
import adopt from './adopt/adoptReducers';

const appReducer = combineReducers({
    ui,
    search,
    adopt
});

export default function(state, action) {
  return appReducer(state, action);
}
