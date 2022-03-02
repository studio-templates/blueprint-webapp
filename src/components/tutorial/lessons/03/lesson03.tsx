import React from 'react';
import styles from './lesson03.module.scss'

export interface Lesson03Props {
    classNme?: string;
}

export const Lesson03: React.FC<Lesson03Props> = ({}) => {
    return (
        <div className={styles.content}>
            <h1>Lesson Three</h1>
        </div>
    )
};

Lesson03.displayName = 'Lesson 3';