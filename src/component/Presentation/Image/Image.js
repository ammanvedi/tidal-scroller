//@flow
import React from 'react';

export type ImageProps = {
    url: string,
    alt: string,
    onLoad: void => void,
    onError: void => void,
    className: string
}

export const Image = ( props: ImageProps ) => {
    return (
        <img alt={ props.alt }
             src={ props.url }
             onLoad={ props.onLoad }
             onError={ props.onError }
             className={ props.className } />
    )
}
