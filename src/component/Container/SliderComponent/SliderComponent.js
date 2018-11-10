//@flow

import React from 'react';
import { connect } from 'react-redux';
import type { State, ActionGenerator, DispatchFunction } from '../../../Store/Type';
import type { ItemModel, ItemComponentProps, TransFormFunction } from '../../Type';
import { Button } from '../../Presentation/Button/Button';
import { debounceFunction } from '../../../util/Debounce';
import Play from '../../../svg/play.svg';
import SVGInline from "react-svg-inline"

import styles from './Slider.scss';

export type SliderProps = {
    itemList?: Array<ItemModel>,
    fetchData?: () => void
}

export type SliderState = {
    sliderPosition: number,
    currentPageIndex: number,
    initialised: boolean
}

export const createSliderComponent = function(
    stateProperty: string,
    fetchAction: ActionGenerator<void>,
    transformFunction: TransFormFunction,
    ItemComponent: Class<React.Component<ItemComponentProps, *>> ) {

    class SliderComponent extends React.Component<SliderProps, SliderState> {

        elements: Array<HTMLElement> = [];
        container: HTMLElement | null;
        pages: Array<number> = [ 0 ];

        constructor( props: SliderProps ) {
            super( props );

            this.state = {
                sliderPosition: 0,
                currentPageIndex: 0,
                initialised: false
            }
        }

        getFullElWidth( element: HTMLElement ) {
            const style = getComputedStyle( element );
            return element.getBoundingClientRect().width + parseInt( style.marginLeft ) + parseInt( style.marginRight );
        }

        evaluatePages() {

            if ( !this.container ) {
                return;
            }

            this.pages = [ 0 ];

            const containerWidth: number = this.container.getBoundingClientRect().width;
            let runningTotal: number = 0;
            this.elements.forEach( ( element: HTMLElement ) => {
                const elWidth: number = this.getFullElWidth( element );
                if ( ( runningTotal + elWidth ) >= containerWidth ) {
                    // This is the start of the next page
                    this.pages.push( element.offsetLeft );
                    runningTotal = elWidth;
                } else {
                    runningTotal += elWidth;
                }
            } );

            this.setState( ( state: SliderState ) => ( {
                ...state,
                sliderPosition: this.pages[ state.currentPageIndex ]
            } ) );
        }

        componentDidMount() {

            if ( !this.props.fetchData ) {
                return;
            }

            this.props.fetchData();
            window.addEventListener( 'resize', debounceFunction( this.evaluatePages.bind( this ) ) );
        }

        componentDidUpdate() {
            if ( !this.state.initialised ) {
                this.evaluatePages();
                this.setState( ( state: SliderState ) => ( { ...state, initialised: true } ) )
            }
        }

        onNextClicked() {
            this.setState( ( state: SliderState ) => ( {
                sliderPosition: this.pages[ state.currentPageIndex + 1 ],
                currentPageIndex: state.currentPageIndex + 1
            } ) )
        }

        onPreviousClicked() {
            this.setState( ( state: SliderState ) => ( {
                sliderPosition: this.pages[ state.currentPageIndex - 1 ],
                currentPageIndex: state.currentPageIndex - 1
            } ) )
        }

        registerElement( index: number, element: HTMLElement | null ): void {

            if ( !element ) {
                return;
            }
            this.elements[ index ] = element;
        }

        render() {
            return (
                <div className={ styles.slider } >
                    <div className={ styles.slider__wrapper }>
                        <ul className={ styles.slider__list }
                            style={{ transform: `translateX( -${ this.state.sliderPosition }px )` }}
                            ref={ ( element: HTMLElement | null ) => { this.container = element  } } >
                            { ( this.props.itemList || [] ).map( ( item: ItemModel, ix: number ) => <ItemComponent setRef={ ( element: HTMLElement | null ) => this.registerElement( ix, element ) } key={item.id} model={item} /> ) }
                        </ul>
                        <Button className={ `${ styles.slider__button } ${ styles[ 'slider__button--next' ] }` }
                                disabled={ this.state.currentPageIndex === ( this.pages.length - 1 ) }
                                text="Next" callback={ () => this.onNextClicked() } >
                                <SVGInline svg={ Play } />
                        </Button>
                        <Button className={ `${ styles.slider__button } ${ styles[ 'slider__button--previous' ] }` }
                                disabled={ this.state.currentPageIndex === 0 }
                                text="Previous"
                                callback={ () => this.onPreviousClicked() }>
                                <SVGInline svg={ Play } />
                        </Button>
                    </div>
                </div>
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
