import React from 'react';
import styles from './summary.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface SummaryProps {
    className?: string;
}

export const Summary: React.FC<SummaryProps> = ({ className }) => {
    return <div className={styles.root}>
        <div>
            <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        </div>
        <div className={styles.footer}>
            <div>
                Summary</div>
            <div>$300/$1000</div>
        </div></div>;
};