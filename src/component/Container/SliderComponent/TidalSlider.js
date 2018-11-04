// @flow

import { tidalDataFetch } from '../../../store/Action/TidalDataAction';
import type { TidalFavoritesData, TidalFavoriteWrapper, TidalFavoriteItem, TidalArtist } from '../../../store/Type';
import type { AlbumList, AlbumModel, SongModel, ArtistModel } from '../../Type';
import { AlbumItem } from '../AlbumItem/AlbumItem';
import { createSliderComponent } from './SliderComponent';

type ImageSize = 80 | 160 | 320 | 640 | 1280;

const getTidalImageUrl = ( imageHash: string, size: ImageSize = 320 ): string => {
    const uuidPath: string = imageHash.split( '-' ).join( '/' );
    return `https://resources.tidal.com/images/${ uuidPath }/${ size.toString() }x${ size.toString() }.jpg`
}

const getAlbumModel = ( tidalInfo: TidalFavoriteItem ): AlbumModel => ( {
    id: tidalInfo.album.id.toString(),
    title: tidalInfo.album.title,
    imageUrl: getTidalImageUrl( tidalInfo.album.cover ),
    songs: [],
    artists: [ getArtistModel( tidalInfo.artist ) ],
    url: tidalInfo.id.toString()
} )

const getSongModel = ( tidalInfo: TidalFavoriteItem ): SongModel => ( {
    id: tidalInfo.id.toString(),
    title: tidalInfo.title,
    artists: tidalInfo.artists.map( artist => getArtistModel( artist ) ),
    url: tidalInfo.id.toString()
} );

const getArtistModel = ( artist: TidalArtist ): ArtistModel => ( {
    id: artist.id.toString(),
    name: artist.name
} );

type IntermediateAlbumMapping = Map<number, AlbumModel>

const getAlbumList = ( tidalData: TidalFavoritesData ): AlbumList => {

    if ( !tidalData.items ) {
        return [];
    }

    const albumMap = tidalData.items.reduce( ( mapping: IntermediateAlbumMapping, wrapper: TidalFavoriteWrapper ): IntermediateAlbumMapping => {
        const tidalItem: TidalFavoriteItem = wrapper.item;

        if ( !mapping.has( tidalItem.album.id ) ) {
            mapping.set( tidalItem.album.id, getAlbumModel( tidalItem ) );
        }

        const val = mapping.get( tidalItem.album.id );
        if( val ) {
            val.songs.push( getSongModel( tidalItem ) )
        }

        return mapping;
    }, new Map() );

    return [ ...albumMap.values() ];

}

const transform = ( data: TidalFavoritesData ): AlbumList => {

    if ( !data.items ) {
        return [];
    }

    return getAlbumList( data );
}

export const TidalSlider = createSliderComponent( 'tidalData', tidalDataFetch, transform, AlbumItem );
