//@flow

import React from 'react';
import styles from './Example.scss';

type Props = {}

export default class ExampleComponent extends React.Component<Props> {
    render() {
        return (
            <div className={ styles.example }>Hello World!</div>
        )
    }
}