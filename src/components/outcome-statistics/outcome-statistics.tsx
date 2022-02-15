import React from 'react';
import styles from './outcome-statistics.module.scss'

export interface OutcomeStatisticsProps {
    className?: string;
}

export const OutcomeStatistics: React.FC<OutcomeStatisticsProps> = ({ className }) => {
    return <div className={styles.root}>OutcomeStatistics</div>;
};