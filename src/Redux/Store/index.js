import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducers';
import reduxLogger from 'redux-logger'


function configureStore() {
    const middlewares = [
        thunkMiddleware,
    ];

    if (process.env.NODE_ENV === `developmenterr`) {
        middlewares.push(reduxLogger);
    }

    return createStore(
        rootReducer,
        applyMiddleware(...middlewares),
    );
}

const initialState = {};

const store = configureStore(initialState);
export default store;
