//@flow

import React from 'react';
import type { AlbumModel } from '../../Type';
import { AlbumCover } from '../../Presentation/AlbumCover/AlbumCover';
import styles from './AlbumItem.scss';

export type AlbumComponentProps = {
    model: AlbumModel,
    setRef: ( el: HTMLElement | null ) => void
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
            <div className={ styles[ 'album-item' ] } ref={ this.props.setRef } >
                <AlbumCover className=""
                            listVisible={ this.state.listVisible }
                            album={ this.props.model }
                            onMouseEnter={ () => this.mouseEnteredAlbumCover() }
                            onMouseLeave={ () => this.mouseLeftAlbumCover() } />
            </div>
        )
    }
}
