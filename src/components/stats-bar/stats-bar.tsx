import React from 'react';
import styles from './stats-bar.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';
import { Icon } from '../icon/Icon';

export interface StatsBarProps {
    className?: string;
    iconId: string;
    percent: number;
    color?: string
    heading: string
}

export const StatsBar: React.FC<StatsBarProps> = ({ className, iconId, percent, heading }) => {
    return <div className={styles.root}>
        <div className={styles.iconContainer}>
            <Icon icon={iconId} className={styles.icon}></Icon>
        </div>
        <div className={styles.progressContainer}><ProgressBar className={styles.myProgress} animate={false} stripes={false} value={percent}></ProgressBar>
            <span className={styles.subHeader}>{heading}</span></div><div className={styles.percent}>{percent} %
        </div></div>;
};