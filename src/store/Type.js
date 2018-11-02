//@flow

import { REQUEST_FETCH_STATUS } from "./Action/TidalDataAction";

export type RequestStatus = $Values<typeof REQUEST_FETCH_STATUS>

export interface Action extends Object {
    +type: string
}

export type ActionTypes = {
    +[ key: string ]: string
}

export type State = {
    tidalData: TidalFavoritesData,
};

export type DispatchFunction = ( action: Action ) => void;

export type DispatchPropsFunction = ( d: any ) => void;

export type DispatchPropsMapping = {
    [ key: string ]: DispatchPropsFunction
};

export type TidalFavoritesData = {
    status: RequestStatus,
    limit?: number,
    offset?: number,
    totalNumberOfItems?: number,
    lastUpdated?: number,
    items?: Array<TidalFavoriteWrapper>
}

export type TidalFavoriteWrapper = {
    created: string,
    item: TidalFavoriteItem
}

export type TidalArtist = {
    id: number,
    name: string,
    type: string
}

export type TidalAlbum = {
    id: number,
    title: string,
    cover: string
}

export type TidalArtists = Array<TidalArtist>;

export type TidalFavoriteItem = {
    id: number,
    title: string,
    duration: number,
    replayGain: number,
    peak: number,
    allowStreaming: boolean,
    streamready: boolean,
    streamStartDate: string,
    premiumStreamingOnly: boolean,
    trackNumber: number,
    volumeNumber: number,
    popularity: number,
    copyright: string,
    version?: string,
    url: string,
    isrc: string,
    editable: boolean,
    explicit: boolean,
    audioQuality: string,
    artist: TidalArtist,
    artists: TidalArtists,
    album: TidalAlbum
}
