import adopt from '../api/adopt';
import {
    UPDATE_ADOPTION_LIST
} from '../constants/actionTypes';

export const fetchAdoptionList = () => (dispatch) => {
  adopt.getAdoptionList()
    .then(results => (
      results.map(result => ({
        image: result.album_file,
        address:
          result.shelter_address.substring(0, 3) ||
          result.shelter_name.substring(0, 3) ||
          result.animal_place.substring(0, 3),
        sex: result.animal_sex
      }))
    ))
    .then(results => {
      console.log(results);
      return results;
    })
    .then(results => (
      dispatch({
        type: UPDATE_ADOPTION_LIST,
        data: results
      })
    ))
    .catch(error => console.log("adoptAPI_ERROR:"+error));
};
