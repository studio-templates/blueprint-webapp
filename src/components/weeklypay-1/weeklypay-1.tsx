import React from 'react';
import styles from './weeklypay-1.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface Weeklypay1Props {
    className?: string;
}

export const Weeklypay1: React.FC<Weeklypay1Props> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} value={0.3} intent="primary"></ProgressBar>
        <div className={styles.footer}>
            <div className={styles.title}>
                Weeklypay1</div>
            <div>334$/4000$</div>
        </div></div>;
};