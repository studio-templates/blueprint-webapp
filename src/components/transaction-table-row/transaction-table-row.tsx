import React from 'react';
import { Receiver } from '../receiver/receiver';
import { Amount } from '../amount/amount';

export interface TransactionTableRowProps {
    className?: string;
}

export const TransactionTableRow: React.FC<TransactionTableRowProps> = ({ className = '' }) => (
    <div className={`${className} transaction-table-row`}>
        <Receiver className="transaction-cell"></Receiver>
        <span className="transaction-type transaction-cell">text        </span>
        <span className="transaction-cell">text</span>
        <Amount amount={25} className="transaction-cell"></Amount></div>
);