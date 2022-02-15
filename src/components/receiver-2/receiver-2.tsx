import React from 'react';

export interface Receiver2Props {
    className?: string;
}

export const Receiver2: React.FC<Receiver2Props> = ({ className = '' }) => (
    <div className={className}>Receiver2</div>
);