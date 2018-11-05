import React from 'react';
import { shallow } from 'enzyme';
import { AlbumItem } from './AlbumItem';
import { AlbumCover } from '../../Presentation/AlbumCover/AlbumCover';
import { AlbumSongList } from '../../Presentation/AlbumSongList/AlbumSongList';

describe( 'Album Item - Container', () => {

    let component;

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
    beforeEach( () => {
        component = shallow( <AlbumItem model={ album } /> )
    } );

    it( 'Renders component correctly', () => {
        expect( component.find( AlbumCover ).length ).toBe( 1 );
        expect( component.find( AlbumSongList ).length ).toBe( 1 );
    } );

} );
