import React from 'react';
import styles from './statistics-line.module.scss'
import { IconCard } from '../icon-card/icon-card';
import { StatisticsProgressBar } from '../statistics-progress-bar/statistics-progress-bar';
import { Text } from '../text/text';

export interface StatisticsLineProps {
    className?: string;
}

export const StatisticsLine: React.FC<StatisticsLineProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={styles.line}>
            <IconCard icon="shopping-cart" />
            <div className={styles.progressDetails}>
                <StatisticsProgressBar />
                <span className={styles.description}>Shopping</span>
            </div>
            <h1 className={styles.completion}>52%</h1>
        </div>
        <div className={styles.line}>
            <IconCard backgroundColor="#DDF9E4" color="#22A447" icon="truck" />
            <div className={styles.progressDetails}>
                <StatisticsProgressBar />
                <span className={styles.description}>Travels</span></div>
        </div>
        <div className={styles.line}>
            <IconCard backgroundColor="#E4F0FF" color="#70A6E8" icon="airplane" />
            <div className={styles.progressDetails}>
                <StatisticsProgressBar />
                <span className={styles.description}>Electronics</span>
            </div>
        </div></div>;
};