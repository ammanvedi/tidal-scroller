//@flow

export interface Action extends Object {
    +type: string,
}

export type ActionTypes = {
    +[ key: string ]: string
}

export type State = {
    example: string
};

export type DispatchFunction = ( action: Action ) => void;

export type DispatchPropsFunction = ( d: any ) => void;

export type DispatchPropsMapping = {
    [ key: string ]: DispatchPropsFunction
};
