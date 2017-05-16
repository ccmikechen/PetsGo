import { handleActions } from 'redux-actions';
import { TestState } from '../constants/model';
import {
    HELLO
} from '../constants/actionTypes';

const testReducer = handleActions({
    HELLO: (state, { text }) => {
        return {
          ...state,
          text
        };
    },
}, TestState);

export default testReducer;
