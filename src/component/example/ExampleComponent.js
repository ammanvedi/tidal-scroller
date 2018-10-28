//@flow

import React from 'react';
import { connect } from 'react-redux';
import styles from './Example.scss';
import type { State, DispatchPropsMapping, DispatchFunction } from '../../store/Type';
import { updateExampleAction } from '../../store/Action/ExampleActions';

type ExampleComponentProps = {
    example: string
}


export class ExampleComponent extends React.Component<ExampleComponentProps> {

    constructor(props: ExampleComponentProps) {
        super(props);
    }

    render() {
        return (
            <div className={ styles.example }>Hello { this.props.example }</div>
        )
    }
}

const mapStateToProps = ( state: State ): ExampleComponentProps => {
    return {
        example: state.example
    }
}

const mapDispatchToProps = ( dispatch: DispatchFunction ): DispatchPropsMapping => {
    return {
        updateExample: ( text: string ) => { dispatch( updateExampleAction( text ) ) }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( ExampleComponent );