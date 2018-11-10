import React from 'react';
import { mount } from 'enzyme';
import { LazyComponent } from './LazyComponent';


describe( 'LazyComponent', () => {

    it( 'Renders children when it comes into view', () => {
        const container = mount(
            <LazyComponent className="" >
                <div id="myElement"></div>
            </LazyComponent>
        );
        // give intersection observer time to evaluate things
        expect( container.find( '#myElement' ).exists() ).toBe( true );
    } );

} );
