// @flow

import React from 'react';
import styles from './Placeholder.scss';

export type PlaceHolderProps = {
    className: string
}

export const Placeholder = ( props: PlaceHolderProps ) => {
    return (
        <div className={`${ styles.placeholder } ${ styles[ props.className ] }`}>
            <span className="placeholder__icon"></span>
        </div>
    )
}
