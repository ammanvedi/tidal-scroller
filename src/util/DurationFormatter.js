// @flow

const TIME_DIVISORS: Array<number> = [ 3600, 60, 1 ];

export function durationFormatter ( durationSecs: number ): string {

    if ( durationSecs === 0 ) {
        return '00:00';
    }

    let secsTotal: number = durationSecs;
    let vals: Array<string> = [];

    TIME_DIVISORS.forEach( ( divisor: number, ix: number ) => {
        const division: number = Math.floor( secsTotal / divisor );
        const delta: number = divisor * division;
        const newVal: number = secsTotal - delta;
        secsTotal = newVal;

        if ( ix === 0 && delta === 0 ) {
            return;
        }

        const divString: string = division.toString();

        vals.push( divString.length === 1 ? `0${ divString }` : divString );
    } )

    return vals.join( ':' );

}
