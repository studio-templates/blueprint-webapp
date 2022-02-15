import React from 'react';
import styles from './item-statistics.module.scss'
import { Icon } from '../icon/Icon';
import { ProgressBar } from '../progress-bar/progress-bar';
import { IconName } from '@blueprintjs/icons';

export interface ItemStatisticsProps {
    className?: string;
    icon: IconName;
    name: string;
    value: number;
    color: string;
}

export const ItemStatistics: React.FC<ItemStatisticsProps> = ({ className, name, value, icon, color }) => {
    return <div className={styles.root}>
        <div className={styles['stat-icon']}>
            <Icon icon={icon} size={20} color={color} /></div>
        <div className={styles['progress-bar']}>
            <ProgressBar animate={false} value={value} intent="primary" stripes={false}></ProgressBar>
            <span className={styles['stat-name']}>{name}</span>
        </div>
        <div className={styles['progress-text']}>{Math.round(value * 100)}%</div>
    </div>;
};