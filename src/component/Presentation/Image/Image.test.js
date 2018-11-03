import React from 'react';
import { shallow } from 'enzyme';
import { Image } from './Image';

describe('Image Component', function() {

    it( 'should render', () => {
        const component = shallow(<Image alt="alt text"
                                   url="imageUrl"
                                   className="test-class" />);
        expect( component.exists( 'img' ) ).toEqual( true );
        expect( component.find( 'img' ).prop( 'src' ) ).toEqual( "imageUrl" );
    } );

});
