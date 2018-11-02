//@flow

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { tidalDataReducer } from './Reducer/TidalDataReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga/RootSaga';
import type createReduxSagaMiddleware from 'redux-saga';

const sagaMiddleware: createReduxSagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers( {
        tidalData: tidalDataReducer
    } ),
    applyMiddleware( sagaMiddleware )
);

sagaMiddleware.run( rootSaga );
