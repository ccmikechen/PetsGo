import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { AdoptState } from '../../constants/model';
import {
    UPDATE_ADOPTION_LIST
} from '../../constants/actionTypes';

const adoptReducer = handleActions({
  UPDATE_ADOPTION_LIST: (state, { data }) => (
    state.set('animals', data)
  ),
}, AdoptState);

export default adoptReducer;
