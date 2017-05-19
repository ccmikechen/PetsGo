import adopt from '../api/adopt';
import {
    UPDATE_ADOPTION_LIST
} from '../constants/actionTypes';

export const fetchAdoptionList = () => (dispatch) => {
  adopt.getAdoptionList()
    .then(results => {
      console.log(results);
      return results;
    })
    .then(results => (
      dispatch({
        type: UPDATE_ADOPTION_LIST,
        data: results
      })
    ));
};
