import React from 'react';
import styles from './title.module.scss'
import TransactionHistory_module_scss from '../transaction-history/transaction-history.module.scss';

export interface TitleProps {
    className?: string;
}

export const Title: React.FC<TitleProps> = ({ className }) => {
    return (
        <div className={`${styles.root} ${styles.row} ${TransactionHistory_module_scss.tableTitle}`}>
            <tr className={styles.tr}>
                <td className={`${styles.receiverColumn}`}>
                    <span>Reciever</span>
                </td>
                <td className={styles.typeColumn}>
                    <span>Type</span>
                </td>
                <td className={styles.dateColumn}>
                    <span>Date</span>
                </td>
                <td className={styles.amountColumn}>
                    <span>Amount</span>
                </td>
            </tr>
        </div>
    );
};