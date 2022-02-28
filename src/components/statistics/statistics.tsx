import React from 'react';
import styles from './statistics.module.scss'

export interface StatisticsProps {
    className?: string;
    price: number;
    text: 'Current Balance' | 'Income' | 'Outcome';
}

export const Statistics: React.FC<StatisticsProps> = ({ text, price, className }) => {
    return <div className={styles.root}>
        <div className={styles.content}>
            <div className={styles.header}>$ {price}</div>
            <div className={styles.description}>{text}</div>
        </div>
    </div>;
};