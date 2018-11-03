import React from 'react';
import { shallow } from 'enzyme';
import { AlbumSongList } from './AlbumSongList';

describe( 'Album Song List - Presentation', () => {

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

    const testList = [
        {
            id: '1',
            title: 'mySong',
            artists: testArtistList,
            url: 'https://www.google.com'
        },
        {
            id: '2',
            title: 'mySong2',
            artists: testArtistList,
            url: 'https://www.google.com#2'
        }
    ];

    it( 'Renders the component correctly', () => {
        const component = shallow( <AlbumSongList songs={ testList } className="myClass" /> );
        expect( component.exists( '.album-song-list' ) )
        expect( component.find( '.album-song-list' ).prop( 'className' ) ).toBe( 'album-song-list myClass' );
        expect( component.find( '.album-song-list' ).children().length ).toBe( 2 );
        expect( component.find( '.album-song-list__artists' ).first().children().length ).toBe( 2 );
    } );

} )
