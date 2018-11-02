//@flow

import { call, put, takeEvery } from 'redux-saga/effects';
import type { Effect } from 'redux-saga';
import { ENDPOINTS } from '../../constants/url';
import { tidalDataSuccess, tidalDataFail } from '../Action/TidalDataAction';
import { TIDAL_DATA_ACTIONS } from '../Action/TidalDataAction';

export function * fetchTidalData(): Generator<Effect, void, any> {
    try {
        const response = yield call( fetch, ENDPOINTS.TIDAL );
        const json = yield response.json();
        if ( response.ok ) {
            yield put( tidalDataSuccess( json ) );
        } else {
            yield put( tidalDataFail() );
        }

    } catch ( error ) {
        console.warn( 'Fetch Failed: ', error );
        yield put( tidalDataFail() );
    }
}


export function * watchFetchTidalData(): Generator<Effect, void, void> {
    yield takeEvery( TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA, fetchTidalData );
}
