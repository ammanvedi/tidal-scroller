import React from 'react';
import { shallow } from 'enzyme';
import { Placeholder } from './Placeholder';

describe( 'Placeholder - Presentation', () => {

    it( 'Renders with correct class', () => {
        const component = shallow( <Placeholder className="myClass" /> );
        expect( component.find( '.placeholder' ).prop( 'className' ) ).toBe( 'placeholder myClass' );
    } );
} );
