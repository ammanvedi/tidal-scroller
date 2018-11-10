import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe( 'Button - Presentaion', () => {


    let callback, container;

    beforeEach( () => {
        callback = jest.fn();
        container = shallow( <Button text="myText" callback={ callback } /> );
    } );

    it( 'Invokes callback on click', () => {
        container.find( 'button' ).simulate( 'click' );
        expect( callback.mock.calls.length ).toBe( 1 );
    } )

} )
