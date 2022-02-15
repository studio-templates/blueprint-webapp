import React from 'react';
import styles from './sumup-menu.module.scss'
import { Icon } from '../icon/Icon';

export interface SumupMenuProps {
    className?: string;
}

export const SumupMenu: React.FC<SumupMenuProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={`${styles.menuItem} ${styles.selected}`}>
            <Icon icon="timeline-line-chart" className={styles.icon} />Overview</div>
        <div className={styles.menuItem}>
            <Icon icon="timeline-line-chart" className={styles.icon} />Overview</div>
        <div className={styles.menuItem}>
            <Icon icon="timeline-line-chart" className={styles.icon} />Overview</div>
    </div>
};