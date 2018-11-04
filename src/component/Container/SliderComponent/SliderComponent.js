//@flow

import React from 'react';
import { connect } from 'react-redux';
import type { State, ActionGenerator, DispatchFunction } from '../../../Store/Type';
import type { ItemModel, ItemComponentProps, TransFormFunction } from '../../Type';


export type SliderProps = {
    itemList?: Array<ItemModel>,
    fetchData?: () => void
}

export const createSliderComponent = function(
    stateProperty: string,
    fetchAction: ActionGenerator<void>,
    transformFunction: TransFormFunction,
    ItemComponent: Class<React.Component<ItemComponentProps, *>> ) {

    class SliderComponent extends React.Component<SliderProps> {

        componentDidMount() {

            if ( !this.props.fetchData ) {
                return;
            }

            this.props.fetchData();
        }

        render() {
            return (
                <ul>
                    { ( this.props.itemList || [] ).map( item => <ItemComponent key={item.id} model={item} /> ) }
                </ul>
            )
        }

    }

    const mapStateToProps = ( state: State ): SliderProps => ( {
        itemList: transformFunction( state[ stateProperty ] )
    } );

    const mapDispatchToProps = ( dispatch: DispatchFunction ): SliderProps => ( {
        fetchData: (): void => { dispatch( fetchAction() ) }
    } );

    return connect( mapStateToProps, mapDispatchToProps )( SliderComponent );

};
