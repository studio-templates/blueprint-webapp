import React from 'react';
import styles from './outcome-statistics.module.scss'

interface ItemStatistics { icon: React.ReactNode; name: string; value: number; }

export interface OutcomeStatisticsProps {
    className?: string;
    stats: ItemStatistics[];
}

export const OutcomeStatistics: React.FC<OutcomeStatisticsProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={styles.title}>
            OutcomeStatistics</div>
        <div className={styles['stats-list']} />
    </div>;
};