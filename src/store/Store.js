//@flow

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { tidalDataReducer } from './Reducer/TidalDataReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga/RootSaga';
import type createReduxSagaMiddleware from 'redux-saga';

const sagaMiddleware: createReduxSagaMiddleware = createSagaMiddleware();

export const tidalState = {
    tidalData: tidalDataReducer
}

export default createStore(
    combineReducers( tidalState ),
    applyMiddleware( sagaMiddleware )
);

sagaMiddleware.run( rootSaga );
