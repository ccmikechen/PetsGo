import { handleActions } from 'redux-actions';
import { TestState } from '../constants/model';

const testReducer = handleActions({
    Hello: (state, { payload }) => {
        return state
    },
}, TestState);

export default testReducer;
