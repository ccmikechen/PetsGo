import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import appReducer from '../reducers';
import ReduxThunk from 'redux-thunk';

const initialState = {};

export default createStore(
    appReducer,
    initialState,
    applyMiddleware(
        ReduxThunk,
        createLogger({ stateTransformer: state => state.toJS() })
    )
);
