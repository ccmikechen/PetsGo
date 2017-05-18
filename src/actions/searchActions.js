import {
    TOGGLE_SEARCH_OPTION
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
}
