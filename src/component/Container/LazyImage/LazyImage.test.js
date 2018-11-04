import React from 'react';
import { shallow } from 'enzyme'
import { LazyImage } from './LazyImage';
import { Image } from '../../Presentation/Image/Image';
import { Placeholder } from '../../Presentation/Placeholder/Placeholder';

describe( 'Lazy Image - Container', () => {

    let container, placeholder, image;

    beforeEach( () => {
        container = shallow( <LazyImage url="abc.com" alt="myalttext" /> );
        placeholder = container.find( Placeholder ).first().props();
        image = container.find( Image ).first().props();
    } )

    it( 'Shows the placeholder and hides the image when image not loaded', () => {
        container.update();
        expect( placeholder.className ).toBe( 'placeholder--visible' );
        expect( image.className ).toBe( 'image--hidden' );
    } );

    it( 'Shows the placeholder when there was an image error', () => {
        image.onError();
        container.update();
        placeholder = container.find( Placeholder ).first().props();
        image = container.find( Image ).first().props();
        expect( placeholder.className ).toBe( 'placeholder--visible' );
        expect( image.className ).toBe( 'image--hidden' );
    } );

    it( 'Shows the image and hides the placeholder when image not loaded', () => {
        image.onLoad();
        container.update();
        placeholder = container.find( Placeholder ).first().props();
        image = container.find( Image ).first().props();
        expect( placeholder.className ).toBe( 'placeholder--hidden' );
        expect( image.className ).toBe( 'image--visible' );
    } )
} )
