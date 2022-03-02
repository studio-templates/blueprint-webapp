import React from 'react';
import styles from './lesson04.module.scss'

export interface Lesson04Props {
    classNme?: string;
}

export const Lesson04: React.FC<Lesson04Props> = ({}) => {
    return (
        <div className={styles.content}>
            <h1>Lesson Four</h1>
        </div>
    )
};

Lesson04.displayName = 'Lesson 4';