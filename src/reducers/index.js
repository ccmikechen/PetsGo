import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import search from './search/searchReducers';
import adopt from './adopt/adoptReducers';
import session from './session/sessionReducers';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    ui,
    search,
    adopt,
    session,
    form: formReducer
});

export default function(state, action) {
  return appReducer(state, action);
}
