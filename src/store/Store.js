//@flow

import { createStore, combineReducers } from 'redux';

import { exampleReducer } from './Reducer/ExampleReducer';

export default createStore( combineReducers( {
    example: exampleReducer
} ) );