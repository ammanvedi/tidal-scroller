//@flow

import { ExampleActions, ExampleAction } from '../Action/ExampleActions';

export function exampleReducer( state: string = '', action: ExampleAction ): string {
    switch ( action.type ) {
        case ExampleActions.EXAMPLE:
            return action.value;
    } 

    return state;
}