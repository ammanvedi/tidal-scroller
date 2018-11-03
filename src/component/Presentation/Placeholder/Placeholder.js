// @flow

import React from 'react';

export type PlaceHolderProps = {
    className: string
}

export const Placeholder = ( props: PlaceHolderProps ) => {
    return (
        <div className={`placeholder ${ props.className }`}>
            <span className="placeholder__icon"></span>
        </div>
    )
}
