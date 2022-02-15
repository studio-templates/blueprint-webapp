import React from 'react';
import styles from './transaction-history.module.scss'
import { Card } from '../card/card';

export interface TransactionHistoryProps {
    className?: string;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ className }) => {
    return <div className={styles.root}>
        <Card className="rounded">
            <h3>Transaction History</h3>
            <table className={styles.table}>
                <tr>
                    <th className={styles['table-head-col']}>Receiver</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </table></Card></div>;
};