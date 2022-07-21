import React from 'react';
import styles from './weeklypayment.module.scss'
import { ProgressBar } from '../progress-bar/progress-bar';

export interface WeeklypaymentProps {
    className?: string;
}

export const Weeklypayment: React.FC<WeeklypaymentProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={styles.title}>
            Weeklypayment</div></div>;
};