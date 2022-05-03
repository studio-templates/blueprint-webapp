import React from 'react';
import styles from './weekly-pyaments.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklyPyamentsProps {
    className?: string;
}

export const WeeklyPyaments: React.FC<WeeklyPyamentsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} intent="primary" value={0.3} />
        <div className={styles.content}>
            <div className={styles.title}>
                WeeklyPyaments</div>
            <div>330 / 3400</div></div></div>;
};