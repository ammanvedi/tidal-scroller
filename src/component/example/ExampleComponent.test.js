import React from 'react';
import { shallow } from 'enzyme';
import ExampleComponent from './ExampleComponent';
import configureStore from 'redux-mock-store';

describe('Example Component', function() {

    let store, component;
    const mockStore = configureStore();

    beforeEach( () => {
        store = mockStore( { example: 'World!' } );
        component = shallow(<ExampleComponent store={ store } />);
    } );

    it( 'should render hello world', () => {
        expect( component.dive().find( '.example' ).text() ).toEqual( 'Hello World!' );
    } );

});


