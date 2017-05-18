import { handleActions } from 'redux-actions';
import { SearchState } from '../../constants/model';
import {
    TOGGLE_SEARCH_OPTION,
    UPDATE_HOSPITAL_DATA
} from '../../constants/actionTypes';

const searchReducer = handleActions({
  TOGGLE_SEARCH_OPTION: (state, { payload }) => {
    let { optionType, toggleState } = payload;
    return state.setIn(['options', optionType, 'actived'], toggleState);
  },
  UPDATE_HOSPITAL_DATA: (state, { data }) => {
    return state.setIn(['locations', 'hospital'], data);
  }
}, SearchState);

export default searchReducer;
