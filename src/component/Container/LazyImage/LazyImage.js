// @flow

import React from 'react';
import { Image } from '../../Presentation/Image/Image';
import { Placeholder } from '../../Presentation/Placeholder/Placeholder';

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
            <div>
                <Placeholder className={ this.state.imageLoaded ? 'placeholder--hidden': 'placeholder--visible' } />
                <Image  url={this.props.url}
                        alt={ this.props.alt }
                        onLoad={ () => this.onLoad() }
                        onError={ () => this.onError() }
                        className={ this.state.imageLoaded ? 'image--visible' : 'image--hidden' } />
            </div>
        )
    }
}
