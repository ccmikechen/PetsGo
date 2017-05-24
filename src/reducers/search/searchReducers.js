import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { SearchState } from '../../constants/model';

const searchReducer = handleActions({
  TOGGLE_SEARCH_OPTION: (state, { payload }) => {
    let { optionType, toggleState } = payload;
    return state.setIn(['options', optionType, 'actived'], toggleState);
  },
  UPDATE_HOSPITAL_DATA: (state, { data }) => (
    state.setIn(['locations', 'hospital'], data)
  ),
  UPDATE_RESTAURANT_DATA: (state, { data }) => (
    state.setIn(['locations', 'restaurant'], data)
  ),
  UPDATE_SALON_DATA: (state, { data }) => (
    state.setIn(['locations', 'salon'], data)
  ),
  UPDATE_NECESSITIES_DATA: (state, { data }) => (
    state.setIn(['locations', 'necessities'], data)
  ),
  UPDATE_REGION: (state, { region }) => {
    return state.set('region', Immutable.fromJS(region));
  }
}, SearchState);

export default searchReducer;
