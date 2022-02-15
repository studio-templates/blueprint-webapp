import React from 'react';

export interface OutcomeStatisticsProps {
    className?: string;
}

export const OutcomeStatistics: React.FC<OutcomeStatisticsProps> = ({ className = '' }) => (
    <div className={className}>OutcomeStatistics</div>
);