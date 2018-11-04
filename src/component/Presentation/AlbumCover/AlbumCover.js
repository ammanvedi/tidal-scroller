// @flow

import React from 'react';

import { LazyImage } from '../../Container/LazyImage/LazyImage';

import type { AlbumModel } from '../../Type';

export type AlbumCoverProps = {
    className: string,
    album: AlbumModel,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

export const AlbumCover = ( props: AlbumCoverProps ) => {

    return (
        <a  href={ props.album.url }
            className={ `album-cover ${ props.className }` }
            onMouseEnter={ () => props.onMouseEnter() }
            onMouseLeave={ () => props.onMouseLeave() } >
            <LazyImage url={ props.album.imageUrl } alt={ `Album for ${ props.album.title }` } />
            <span>{ props.album.title }</span>
            <ul className="album-cover__artists" >
                { props.album.artists.map( artist => <li key={ artist.id } >{ artist.name }</li> ) }
            </ul>
        </a>
    )
}
