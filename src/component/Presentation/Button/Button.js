// @flow

import React from 'react';

export type ButtonProps = {
    text: string,
    callback: () => void
}

export const Button = ( props: ButtonProps ) => {
    return (
        <button onClick={ props.callback } type="button">{ props.text }</button>
    )
}
