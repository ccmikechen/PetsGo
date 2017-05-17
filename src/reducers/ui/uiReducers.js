import { handleActions } from 'redux-actions';
import { UiState } from '../../constants/model';
import {
    HELLO
} from '../../constants/actionTypes';

const uiReducer = handleActions({
  HELLO: (state, { text }) => {
    return {
      ...state,
      text
    };
  },
}, UiState);

export default uiReducer;
