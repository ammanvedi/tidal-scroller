//@flow

import type { TidalFavoritesData } from '../Type';
import type { TidalDataAction } from '../Action/TidalDataAction';
import { TIDAL_DATA_ACTIONS, REQUEST_FETCH_STATUS } from '../Action/TidalDataAction';

export function tidalDataReducer( state: TidalFavoritesData = { status: REQUEST_FETCH_STATUS.NONE }, action: TidalDataAction ): TidalFavoritesData {

    switch( action.type ) {
        case TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA_SUCCESS:
            return { ...action.data, status: REQUEST_FETCH_STATUS.SUCCESS };
        case TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA_FAIL:
            return { status: REQUEST_FETCH_STATUS.FAIL }
        default:
            return state;
    }
}
