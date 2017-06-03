import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { AdoptState } from '../../constants/model';

const adoptReducer = handleActions({
  UPDATE_ADOPTION_LIST: (state, { data }) => (
    state.set('animals', Immutable.fromJS(data))
  ),
  UPDATE_SHELTER_POSITIONS: (state, { data }) => (
    state.set('shelters', Immutable.fromJS(data))
  )
}, AdoptState);

export default adoptReducer;
