import React from 'react';
import styles from './transaction-history.module.scss'
import { Card } from '../card/card';

export interface TransactionHistoryProps {
    className?: string;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ className }) => {
    return <div className={styles.root}>
        <Card className="rounded">TransactionHistory
        </Card></div>;
};