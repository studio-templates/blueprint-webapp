import React from 'react';
import styles from './lesson01.module.scss'

export interface Lesson01Props {
    classNme?: string;
}

export const Lesson01: React.FC<Lesson01Props> = ({ }) => {
    return (
        <div className={styles.content}>
            <h1>Lesson one</h1>
            <input type="checkbox" />
            <label>click me if u dare</label>
            <button>Button</button>
        </div>
    )
};

Lesson01.displayName = 'Lesson 1';