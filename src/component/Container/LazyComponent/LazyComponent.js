//@flow

import * as React from 'react';
import globalObserver from '../../../util/GlobalIntersectionObserver';

export type LazyComponentProps = {
    className: string,
    children?: React.Node
}

export type LazyComponentState = {
    visible: boolean
}

export class LazyComponent extends React.Component<LazyComponentProps, LazyComponentState> {
    constructor( props: LazyComponentProps ) {
        super( props );
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <div className={ this.props.className } ref={ ( el: ?HTMLElement ) => this.onRef( el ) } >
                { this.state.visible ? this.props.children : [] }
            </div>
        )
    }

    onBecomesVisible() {
        if ( this.state.visible ) {
            return;
        }

        this.setState( () => ( {
            visible: true
        } ) );
    }

    onRef( element: ?HTMLElement ) {
        if ( !element ) {
            return;
        }
        globalObserver.addElement( element, this.onBecomesVisible.bind( this ) );
    }
}
