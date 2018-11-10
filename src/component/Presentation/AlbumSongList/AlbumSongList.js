// @flow

import React from 'react';
import type { SongModel } from '../../Type';
import styles from './AlbumSongList.scss';
import SVG from 'react-inlinesvg';
import Play from '../../../svg/play.svg';

export type AlbumSongListProps = {
    songs: Array<SongModel>,
    className: string
}

export const AlbumSongList = ( props: AlbumSongListProps ) => {
    return (
        <ul className={ `${ styles[ 'album-song-list' ] } ${ props.className }` } >
            {
                props.songs.map( song => {
                    return (
                        <li key={ song.id } >
                            <a href={song.url} >
                                <SVG src={ Play } />
                                <span>{song.title}</span>
                                <ul className="album-song-list__artists" >
                                    { song.artists.map( artist => <li key={artist.id} >{ artist.name }</li> ) }
                                </ul>
                            </a>
                        </li>
                    )
                } )
            }
        </ul>
    )
}
