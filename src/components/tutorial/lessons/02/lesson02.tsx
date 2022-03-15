import React from 'react';
import styles from './lesson02.module.scss'

export interface Lesson02Props {
    classNme?: string;
}

export const Lesson02: React.FC<Lesson02Props> = ({ }) => {
    return (
        <div className={styles.content}>
            <h1>Lesson 2</h1>
        </div>
    )
};

Lesson02.displayName = 'Lesson 2';