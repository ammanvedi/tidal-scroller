import { timeAgo } from './TimeAgo';

describe( 'Days Ago Generator', () => {

    const ONE_MIN = 60 * 1000;
    const ONE_HOUR = ONE_MIN * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_WEEK = ONE_DAY * 7;
    const ONE_MONTH = ONE_WEEK * 4;
    const ONE_YEAR = ONE_DAY * 365;
    const now = new Date().getTime();

    describe( 'Minutes', () => {
        it( 'one minute ago', () => {
            expect( timeAgo( now, now - ONE_MIN ) ).toBe( 'a min ago' );
        } );

        it( 'two minutes ago', () => {
            expect( timeAgo( now, now - ONE_MIN * 2 ) ).toBe( '2 mins ago' );
        } );
    } );

    describe( 'Hours', () => {
        it( 'one hour ago', () => {
            expect( timeAgo( now, now - ONE_HOUR ) ).toBe( 'an hour ago' );
        } );

        it( 'two hours ago', () => {
            expect( timeAgo( now, now - ONE_HOUR * 2 ) ).toBe( '2 hours ago' );
        } );
    } );

    describe( 'Days', () => {
        it( 'one day ago', () => {
            expect( timeAgo( now, now - ONE_DAY ) ).toBe( 'a day ago' );
        } );

        it( 'two days ago', () => {
            expect( timeAgo( now, now - ONE_DAY * 2 ) ).toBe( '2 days ago' );
        } );
    } );

    describe( 'Weeks', () => {
        it( 'one week ago', () => {
            expect( timeAgo( now, now - ONE_WEEK ) ).toBe( 'a week ago' );
        } );

        it( 'two weeks ago', () => {
            expect( timeAgo( now, now - ONE_WEEK * 2 ) ).toBe( '2 weeks ago' );
        } );
    } );

    describe( 'Months', () => {
        it( 'one month ago', () => {
            expect( timeAgo( now, now - ONE_MONTH ) ).toBe( 'a month ago' );
        } );

        it( 'two months ago', () => {
            expect( timeAgo( now, now - ONE_MONTH * 2 ) ).toBe( '2 months ago' );
        } );
    } );

    describe( 'Years', () => {
        it( 'one year ago', () => {
            expect( timeAgo( now, now - ONE_YEAR ) ).toBe( 'a year ago' );
        } );

        it( 'two years ago', () => {
            expect( timeAgo( now, now - ONE_YEAR * 2 ) ).toBe( '2 years ago' );
        } );
    } );
} );
