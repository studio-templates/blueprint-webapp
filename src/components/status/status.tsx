import React from 'react';
import styles from './status.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface StatusProps {
    className?: string;
}

export const Status: React.FC<StatusProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        <div className={styles.footer}>
            weekly summary</div></div>;
};