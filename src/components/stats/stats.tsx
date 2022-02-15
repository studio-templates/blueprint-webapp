import React from 'react';
import styles from './stats.module.scss'
import { StatsBar } from '../stats-bar/stats-bar';
import StatsBar_module_scss from '../stats-bar/stats-bar.module.scss';

export interface StatsProps {
    className?: string;
    statBars: Array<{
        iconId: string;
        color: string,
        percent: number;
        heading: string;
    }>
}

export const Stats: React.FC<StatsProps> = ({ className,statBars = [] }) => {
    const cards = statBars.map(({iconId,percent,color,heading}) => 
        <StatsBar iconId={iconId} percent={percent} heading={heading} />
    )

    return <div className={styles.root}>
        <h1 className={StatsBar_module_scss.heading}>Outcome Statistics</h1>
        {cards}
    </div>;
};