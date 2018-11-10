// @flow

import * as React from 'react';

export type ButtonProps = {
    callback: () => void,
    disabled: boolean,
    className: string,
    children: React.Node
}

export const Button = ( props: ButtonProps ) => {
    return (
        <button className={ props.className } disabled={props.disabled} onClick={ props.callback } type="button">
            { props.children }
        </button>
    )
}
