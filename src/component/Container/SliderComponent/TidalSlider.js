// @flow

import { tidalDataFetch } from '../../../store/Action/TidalDataAction';
import type { TidalFavoritesData, TidalFavoriteWrapper } from '../../../store/Type';
import type { AlbumList, AlbumModel } from '../../Type';
import { AlbumItem } from '../AlbumItem/AlbumItem';
import { createSliderComponent } from './SliderComponent';

const transform = ( data: TidalFavoritesData ): AlbumList => {

    if ( !data.items ) {
        return [];
    }

    return data.items.map( ( tidalItem: TidalFavoriteWrapper ): AlbumModel => ( {
        id: tidalItem.item.id.toString(),
        title: tidalItem.item.album.title,
        imageUrl: tidalItem.item.album.cover,
        songs: [],
        artists: [],
        url: ''
    } ) );
}

export const TidalSlider = createSliderComponent( 'tidalData', tidalDataFetch, transform, AlbumItem );
