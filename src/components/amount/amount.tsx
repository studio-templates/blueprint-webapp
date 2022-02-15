import React from 'react';
import styles from './amount.module.scss'

export interface AmountProps {
    className?: string;
    amount: number;
}

export const Amount: React.FC<AmountProps> = ({ amount, className }) => {
    return <div className={`${styles.root} ${styles.amount} transaction-cell`}>$<span>{amount}</span>
    </div>;
};