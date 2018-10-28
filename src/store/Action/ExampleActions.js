//@flow

import type { ActionTypes, Action } from '../Type';  

export const ExampleActions: ActionTypes = {
    'EXAMPLE': 'example'
}

export interface ExampleAction extends Action {
    value: string
}

export function updateExampleAction( value: string ): ExampleAction {
    return {
        type: ExampleActions.EXAMPLE,
        value
    }
}