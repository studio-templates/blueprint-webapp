import React from 'react';
import { Receiver } from '../receiver/receiver';
import { Amount } from '../amount/amount';

export interface TransactionTableRowProps {
    className?: string;
    name: string;
    icon: string;
    type: string;
    date: string;
    amount: number;
}

export const TransactionTableRow: React.FC<TransactionTableRowProps> = ({ amount, date, icon, name, type, className = '' }) => (
    <div className={`${className} transaction-table-row`}>
        <Receiver icon={icon} name={name} className="transaction-cell"></Receiver>
        <span className="transaction-type transaction-cell">{type}</span>
        <span className="transaction-cell transaction-date">{date}</span>
        <Amount amount={amount} className="transaction-cell" />
    </div>
);