// @flow

import React from 'react';
import { LazyImage } from '../../Container/LazyImage/LazyImage';
import styles from './AlbumCover.scss';
import type { AlbumModel } from '../../Type';
import { timeAgo } from '../../../util/TimeAgo';
import { AlbumSongList } from '../AlbumSongList/AlbumSongList';
import SVGInline from "react-svg-inline"
import Heart from '../../../svg/heart.svg';

export type AlbumCoverProps = {
    className: string,
    album: AlbumModel,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    listVisible: boolean
}

export const AlbumCover = ( props: AlbumCoverProps ) => {

    const now = new Date().getTime();



    return (
        <div
            className={ `${ styles.album_cover } ${ props.listVisible ? styles[ 'album_cover--dark-gradient' ] : '' }` }
            onMouseEnter={ () => props.onMouseEnter() }
            onMouseLeave={ () => props.onMouseLeave() } >
            <LazyImage url={ props.album.imageUrl } alt={ `Album for ${ props.album.title }` } />

            <div className={ `${ styles.album_cover__meta } ${ props.listVisible ? styles[ 'album_cover__meta--show-list' ] : '' }` } >
                <div className={ styles.album_cover__meta_wrap }>
                    <div className={ styles.album_cover__meta_top } >
                        <SVGInline svg={ Heart } />
                        <span className={ styles.album_cover__track_count } >
                            { props.album.songs.length === 1 ? '1 Track' : `${ props.album.songs.length } Tracks` }
                        </span>
                        <span className={ styles.album_cover__timestamp }>
                            { timeAgo( now, new Date( props.album.lastUpdated ).getTime() ) }
                        </span>
                    </div>
                    <span className={ styles.album_cover__title } >{ props.album.title }</span>
                    <ul className={ styles.album_cover__artists } >
                        { props.album.artists.map( artist => <li key={ artist.id } >{ artist.name }</li> ) }
                    </ul>
                </div>
                <AlbumSongList songs={ props.album.songs } className={ props.listVisible ? 'album-song-list--show' : '' } />
            </div>
        </div>
    )
}
