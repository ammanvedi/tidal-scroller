//@flow

import React from 'react';
import type { AlbumModel } from '../../Type';
import { AlbumCover } from '../../Presentation/AlbumCover/AlbumCover';
import { AlbumSongList } from '../../Presentation/AlbumSongList/AlbumSongList';

export type AlbumComponentProps = {
    model: AlbumModel
}

export type AlbumComponentState = {
    listVisible: boolean
}

export class AlbumItem extends React.Component<AlbumComponentProps, AlbumComponentState> {

    constructor( props: AlbumComponentProps ) {
        super( props );

        this.state = {
            listVisible: false
        }
    }

    mouseEnteredAlbumCover() {
        this.setState( () => ( { listVisible: true } ) );
    }

    mouseLeftAlbumCover() {
        this.setState( () => ( { listVisible: false } ) );
    }

    render() {

        return (
            <div>
                <AlbumCover className=""
                            album={ this.props.model }
                            onMouseEnter={ () => this.mouseEnteredAlbumCover() }
                            onMouseLeave={ () => this.mouseLeftAlbumCover() } />
                <AlbumSongList className={ this.state.listVisible ? 'album-song-list--visible': 'album-song-list--hidden' } songs={ this.props.model.songs } />
            </div>
        )
    }
}
