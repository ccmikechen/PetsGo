import googleMap from '../api/googleMap';
import {
    TOGGLE_SEARCH_OPTION,
    UPDATE_HOSPITAL_DATA,
    UPDATE_RESTAURANT_DATA,
    UPDATE_SALON_DATA,
    UPDATE_NECESSITIES_DATA,
    UPDATE_REGION,
} from '../constants/actionTypes';

export const toggleOption = (optionType, toggleState) => (dispatch) => (
  dispatch({
    type: TOGGLE_SEARCH_OPTION,
    payload: {
      optionType,
      toggleState
    }
  })
);

export const fetchStoresInfo = (position) => (dispatch) => {
  googleMap.getHospitals(position).then(results => {
    dispatch({
      type: UPDATE_HOSPITAL_DATA,
      data: results
    });
  });
  googleMap.getRestaurants(position).then(results => {
    dispatch({
      data: results,
      type: UPDATE_RESTAURANT_DATA,
    });
  });
  googleMap.getSalons(position).then(results => {
    dispatch({
      type: UPDATE_SALON_DATA,
      data: results
    });
  });
  googleMap.getNecessities(position).then(results => {
    dispatch({
      type: UPDATE_NECESSITIES_DATA,
      data: results
    });
  });
};

export const updateRegion = (region) => (dispatch) => {
  return dispatch({ type: UPDATE_REGION, region });
};
