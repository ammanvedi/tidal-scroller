import { durationFormatter } from './DurationFormatter';


describe( 'Duration Formatter', () => {

    it( 'Outputs seconds correctly', () => {
        expect( durationFormatter( 20 ) ).toBe( '00:20' );
    } );

    it( 'Outputs minutes correctly', () => {
        expect( durationFormatter( 60 ) ).toBe( '01:00' );
    } );

    it( 'Outputs hours correctly', () => {
        expect( durationFormatter( 60 * 60 * 5 ) ).toBe( '05:00:00' );
    } );

    it( 'Outputs hours and minutes correctly', () => {
        expect( durationFormatter( 80 ) ).toBe( '01:20' );
    } );

    it( 'Outputs a 0 value correctly', () => {
        expect( durationFormatter( 0 ) ).toBe( '00:00' );
    } );

} );
