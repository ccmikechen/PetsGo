import googleMap from '../api/googleMap';
import {
    TOGGLE_SEARCH_OPTION,
    UPDATE_HOSPITAL_DATA
} from '../constants/actionTypes';

export function toggleOption(optionType, toggleState) {
  return dispatch => {
    dispatch({
      type: TOGGLE_SEARCH_OPTION,
      payload: {
        optionType,
        toggleState
      }
    });
  };
};

export function fetchStoresInfo(position) {
  return dispatch => {
    return googleMap.getHospitals(position).then(results => {
      return dispatch({
        type: UPDATE_HOSPITAL_DATA,
        data: results
      });
    });
  };
};
