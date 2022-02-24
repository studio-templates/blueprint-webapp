import React from 'react';
import styles from './transactions-block.module.scss'
import { Transactions } from '../transactions/transactions';

export interface TransactionsBlockProps {
    className?: string;
}

export const TransactionsBlock: React.FC<TransactionsBlockProps> = ({ className }) => {
    return <div className={styles.root}>
        <div className={styles.blocktitle}>Transactions History</div>
        <div className={styles.categories}>
            <div className={styles.reciever}>
                Reciever
            </div>
            <div className={styles.type}>Type</div>
            <div className={styles.date}>Date</div>
            <div className={styles.amount}>Amount</div>
        </div>
        <Transactions /></div>;
};