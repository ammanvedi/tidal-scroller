import React from 'react';
import { shallow } from 'enzyme';
import { AlbumCover } from './AlbumCover';


describe( 'Album Cover - Presentation', () => {

    const testArtistList = [
        {
            id: '1',
            name: 'myArtist'
        },
        {
            id: '2',
            name: 'myArtist2'
        }
    ]

    const album = {
        id: '1',
        title: 'myAlbum',
        imageUrl: 'abc',
        songs: [],
        artists: testArtistList,
        url: 'https://www.google.com'
    }

    let component, enter, leave;

    beforeEach( () => {
        enter = jest.fn();
        leave = jest.fn();
        component = shallow( <AlbumCover className="myClass" album={ album } onMouseEnter={ enter } onMouseLeave={ leave } /> );
    } )

    it( 'Renders the component correctly', () => {
        expect( component.find( '.album_cover' ).length ).toBe( 1 );
        expect( component.find( '.album_cover__artists' ).first().children().length ).toBe( 2 );
    } );

    it( 'Fires mouse enter callback', () => {
        component.simulate( 'mouseEnter' );
        expect( enter.mock.calls.length ).toBe( 1 );
    } )

    it( 'Fires mouse leave callback', () => {
        component.simulate( 'mouseLeave' );
        expect( leave.mock.calls.length ).toBe( 1 );
    } );
} );
