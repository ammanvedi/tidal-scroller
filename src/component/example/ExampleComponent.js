//@flow

import React from 'react';
import { connect } from 'react-redux';
import styles from './Example.scss';
import type { State, DispatchPropsMapping, DispatchFunction } from '../../store/Type';
import { tidalDataFetch } from '../../store/Action/TidalDataAction';
import type { TidalFavoritesData } from '../../store/Type';

type ExampleComponentProps = {
    tidalData?: TidalFavoritesData,
    fetchData?: () => void
}


export class ExampleComponent extends React.Component<ExampleComponentProps> {

    constructor(props: ExampleComponentProps) {
        super(props);
    }

    componentDidMount() {
        if ( !this.props.fetchData ) {
            return;
        }
        this.props.fetchData();
    }

    render() {
        return (
            <div className={ styles.example }>Hello { this.props.tidalData ? this.props.tidalData.lastUpdated : '' }</div>
        )
    }
}

const mapStateToProps = ( state: State ): ExampleComponentProps => {
    return {
        tidalData: state.tidalData
    }
}

const mapDispatchToProps = ( dispatch: DispatchFunction ): DispatchPropsMapping => {
    return {
        fetchData: () => { dispatch( tidalDataFetch() ) }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( ExampleComponent );
