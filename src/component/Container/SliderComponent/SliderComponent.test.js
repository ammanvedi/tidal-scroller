import React from 'react';
import { mount } from 'enzyme'
import { createSliderComponent } from './SliderComponent';
import configureStore from 'redux-mock-store';

describe( 'Slider Component - Container', () => {

    class Item extends React.Component {
        render() {
            return (
                <li key={this.props.model.id} />
            )
        }
    }

    let ContainerClass, container, fetchFunction, state, mockStore, store;

    beforeEach( () => {
        state = {
            data: [
                {
                    id: '1',
                    title: 'myTitle',
                    imageUrl: 'url'
                },
                {
                    id: '2',
                    title: 'myTitle',
                    imageUrl: 'url'
                }
            ]
        }
        fetchFunction = jest.fn( () => ({ type: 'dummyAction' }) );
        ContainerClass = createSliderComponent( 'data', fetchFunction, data => data, Item);
        mockStore = configureStore();
        store = mockStore( state );
        container = mount( <ContainerClass store={ store } /> );
    } );

    it( 'Renders the correct number of items', () => {
        expect( container.find( 'ul' ).children().length ).toBe( 2 );
    } );

    it( 'Renders the correct item class', () => {
        expect( container.find( 'li' ).length ).toBe( 2 );
    } );

    it( 'Calls the data fetch function', () => {
        expect( fetchFunction.mock.calls.length ).toBe( 1 );
    } )
} );
