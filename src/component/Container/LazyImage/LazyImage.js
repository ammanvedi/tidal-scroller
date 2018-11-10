// @flow

import React from 'react';
import { Image } from '../../Presentation/Image/Image';
import { Placeholder } from '../../Presentation/Placeholder/Placeholder';
import { LazyComponent } from '../LazyComponent/LazyComponent';
import styles from './LazyImage.scss';

export type LazyImageProps = {
    url: string,
    alt: string
}

export type LazyImageState = {
    imageLoaded: boolean
}

export class LazyImage extends React.Component<LazyImageProps, LazyImageState> {

    constructor( props: LazyImageProps ) {
        super( props );
        this.state = {
            imageLoaded: false
        }
    }

    onLoad() {
        this.setState( () => ( {
            imageLoaded: true
        } ) );
    }

    onError() {
        this.setState( () => ( {
            imageLoaded: false
        } ) );
    }

    render() {
        return(
            <div className={ styles.lazy_image } >
                <LazyComponent className={ styles.lazy_image__wrapper } >
                    <Placeholder className={ this.state.imageLoaded ? 'placeholder--hidden': 'placeholder--visible' } />
                    <Image  url={this.props.url}
                            alt={ this.props.alt }
                            onLoad={ () => this.onLoad() }
                            onError={ () => this.onError() }
                            className={ this.state.imageLoaded ? 'image--visible' : 'image--hidden' } />
                </LazyComponent>
            </div>
        )
    }
}
