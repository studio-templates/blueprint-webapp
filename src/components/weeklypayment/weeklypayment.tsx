import React from 'react';
import styles from './weeklypayment.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklypaymentProps {
    className?: string;
}

export const Weeklypayment: React.FC<WeeklypaymentProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar value={0.3} stripes={false} animate={false} intent="primary" />
        <div className={styles.footer}>
            <div className={styles.title}>
                Weeklypayment</div>
            <div>333$ / 4000$</div>
        </div></div>;
};