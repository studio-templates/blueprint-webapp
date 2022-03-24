import React from 'react';
import styles from './weeklypay.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklypayProps {
    className?: string;
}

export const Weeklypay: React.FC<WeeklypayProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar value={0.3} animate={false} stripes={false} intent="primary" />
        <div className={styles.footer}>
            <div className={styles.title}>
                Weeklypay</div>
            <div>333$ / 4000$</div>
        </div></div>;
};