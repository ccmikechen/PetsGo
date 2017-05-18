import { handleActions } from 'redux-actions';
import { SearchState } from '../../constants/model';
import {
    TOGGLE_SEARCH_OPTION
} from '../../constants/actionTypes';

const searchReducer = handleActions({
  TOGGLE_SEARCH_OPTION: (state, { payload }) => {
    let { optionType, toggleState } = payload;
    return state.setIn(['options', optionType, 'actived'], toggleState);
  },
}, SearchState);

export default searchReducer;
