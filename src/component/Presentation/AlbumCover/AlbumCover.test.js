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

    it( 'Renders the component correctly', () => {
        const component = shallow( <AlbumCover className="myClass" album={ album } /> );

        expect( component.exists( '.album-cover' ) ).toBe( true );
        expect( component.find( '.album-cover__artists' ).first().children().length ).toBe( 2 );
    } )
} )
