import React from 'react';

export interface AmountProps {
    className?: string;
    amount: number;
}

export const Amount: React.FC<AmountProps> = ({ amount, className = '' }) => (
    <div className={className}>$
        <span>{amount}</span></div>
);