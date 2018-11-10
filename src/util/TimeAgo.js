//@flow

const ONE_MIN = 60 * 1000;
const ONE_HOUR = ONE_MIN * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;
const ONE_MONTH = ONE_WEEK * 4;
const ONE_YEAR = ONE_DAY * 365;

export type formatter = ( count: number ) => string;
export type formatterDefinition = {
    singular: formatter,
    plural: formatter
}
export type DivisionDefinition = {
    value: number,
    formatters: formatterDefinition
}
export type TimeDivisions = Array<DivisionDefinition>;

const TIME_DIVISIONS: TimeDivisions = [
    {
        value: ONE_YEAR,
        formatters: {
            singular: () => `a year ago`,
            plural: c => `${ c } years ago`
        }
    },
    {
        value: ONE_MONTH,
        formatters: {
            singular: () => `a month ago`,
            plural: c => `${ c } months ago`
        }
    },
    {
        value: ONE_WEEK,
        formatters: {
            singular: () => `a week ago`,
            plural: c => `${ c } weeks ago`
        }
    },
    {
        value: ONE_DAY,
        formatters: {
            singular: () => `a day ago`,
            plural: c => `${ c } days ago`
        }
    },
    {
        value: ONE_HOUR,
        formatters: {
            singular: () => `an hour ago`,
            plural: c => `${ c } hours ago`
        }
    },
    {
        value: ONE_MIN,
        formatters: {
            singular: () => `a min ago`,
            plural: c => `${ c } mins ago`
        }
    }

]

export function timeAgo( referenceTime: number, targetTime: number ): string {

    if ( referenceTime < targetTime ) {
        console.warn( 'Time Ago: Reference time must be after target time' );
        return '';
    }

    const timeDelta = referenceTime - targetTime;

    for( let count: number = 0; count < TIME_DIVISIONS.length; count++ ) {
        const division: DivisionDefinition = TIME_DIVISIONS[ count ];

        if ( timeDelta >= division.value ) {
            const divCount: number = Math.floor( timeDelta / division.value );
            return divCount === 1 ? division.formatters.singular( divCount ) : division.formatters.plural( divCount );
        }
    }

    return '';

}
