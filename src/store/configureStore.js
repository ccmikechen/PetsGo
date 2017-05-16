import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk';

const initialState = {};

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        ReduxThunk,
        createLogger({ stateTransformer: state => state.toJS() })
    )
);
