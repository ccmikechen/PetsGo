import adopt from '../api/adopt';
import googleMap from '../api/googleMap';
import {
    UPDATE_ADOPTION_LIST,
    UPDATE_SHELTER_POSITIONS
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
        fullAddress:
          result.shelter_address ||
          result.shelter_name ||
          result.animal_place,
        sex: result.animal_sex,
        key: result.animal_id,
        kind: result.animal_kind,
        place: result.animal_place,
        bodyType: result.animal_bodytype,
        color: result.animal_colour,
        age: result.animal_age,
        status: result.animal_status,
        remark: result.animal_remark,
        createTime: result.animal_createtime,
        updateTime: result.animal_update,
        shelterTel: result.shelter_tel,
        shelterName: result.shelter_name,
        foundPlace: result.animal_foundplace
      }))
    ))
    .then(results => {
      return results;
    })
    .then(results => (
      dispatch({
        type: UPDATE_ADOPTION_LIST,
        data: results
      })
    ))
    .catch(error => console.log("adoptActions_ERROR:"+error));
};

export const fetchShelterPositions = (address) => (dispatch) => {
  googleMap.getShelterPositions(address).then(results => {
    dispatch({
      type: UPDATE_SHELTER_POSITIONS,
      data: results
    });
  });
};
