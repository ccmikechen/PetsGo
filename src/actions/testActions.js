import { createAction } from 'redux-actions';
import {
    HELLO
} from '../constants/actionTypes';

export const hello = createAction(HELLO);
