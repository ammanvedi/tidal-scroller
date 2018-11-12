// @flow

import React from 'react';
import type { SongModel } from '../../Type';
import styles from './AlbumSongList.scss';
import songStyles from './Song.scss';
import SVGInline from "react-svg-inline"
import Play from '../../../svg/play.svg';
import { durationFormatter } from '../../../util/DurationFormatter';

export type AlbumSongListProps = {
    songs: Array<SongModel>,
    className: string
}

export const AlbumSongList = ( props: AlbumSongListProps ) => {
    return (
        <ul className={ `${ styles[ 'album-song-list' ] } ${ styles[ props.className ] }` } >
            {
                props.songs.map( song => {
                    return (
                        <li key={ song.id } className={ songStyles.song } >
                            <a className={ songStyles.song__link } href={song.url} target="_blank" rel="noopener noreferrer" >
                                <div className={ songStyles.song__header } >
                                    <div className={ songStyles.song__play_icon } >
                                        <SVGInline svg={ Play } />
                                    </div>
                                    <span className={ songStyles.song__heading } >{song.title}</span>
                                </div>

                                <div className={ songStyles.song__meta } >
                                    <span className={ songStyles.song__meta_text } >{song.artists.map( a => a.name ).join( ', ' )}</span>
                                    <div className={ songStyles.song__dot }></div>
                                    <span className={ songStyles.song__meta_text } >{ durationFormatter( song.duration ) }</span>
                                    { song.explicit ? <div className={ songStyles.song__dot }></div> : '' }
                                    { song.explicit ? <span className={ songStyles.song__explicit } >E</span> : '' }
                                </div>
                            </a>
                        </li>
                    )
                } )
            }
        </ul>
    )
}
