import { handleActions } from 'redux-actions';
import { SearchState } from '../../constants/model';
import {
    HELLO
} from '../../constants/actionTypes';

const searchReducer = handleActions({
  HELLO: (state, { text }) => {
    return {
      ...state,
      text
    };
  },
}, SearchState);

export default searchReducer;
