//@flow

import type { Action, ActionTypes, TidalFavoritesData } from '../Type';

export type TidalAction = $Values<typeof TIDAL_DATA_ACTIONS>
export type RequestStatus = $Values<typeof REQUEST_FETCH_STATUS>

export interface TidalDataAction extends Action {
    type: TidalAction,
    data?: TidalFavoritesData
}

export const REQUEST_FETCH_STATUS = {
    NONE: 'NONE',
    PENDING: 'PENDING',
    FAIL: 'FAIL',
    SUCCESS: 'SUCCESS'
};

export const TIDAL_DATA_ACTIONS: ActionTypes = {
    FETCH_TIDAL_DATA: 'FETCH_TIDAL_DATA', // async action, this will be handled by sagas
    FETCH_TIDAL_DATA_SUCCESS: 'FETCH_TIDAL_DATA_SUCCESS',
    FETCH_TIDAL_DATA_FAIL: 'FETCH_TIDAL_DATA_FAIL'
};

export function tidalDataSuccess( data: TidalFavoritesData ): TidalDataAction {
    return {
        type: TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA_SUCCESS,
        data
    }
}

export function tidalDataFail(): TidalDataAction {
    return {
        type: TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA_FAIL
    }
}

export function tidalDataFetch(): TidalDataAction {
    return {
        type: TIDAL_DATA_ACTIONS.FETCH_TIDAL_DATA
    }
}
