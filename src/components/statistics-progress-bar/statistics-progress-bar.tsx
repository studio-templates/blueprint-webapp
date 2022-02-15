import React from 'react';
import styles from './statistics-progress-bar.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface StatisticsProgressBarProps {
    className?: string;
}

export const StatisticsProgressBar: React.FC<StatisticsProgressBarProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3}></ProgressBar></div>;
};