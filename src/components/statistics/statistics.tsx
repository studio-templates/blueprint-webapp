import React from 'react';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Text } from '../text/text';
import { Icon } from '../icon/Icon';
import styles from './statistics.module.scss';

export interface StatisticsProps {
    className?: string;
    /**
     * Value between 0 and 1 (inclusive). Ommiting this value will default to 0.
     */
    value?: number;
    title?: string;
}

export const Statistics: React.FC<StatisticsProps> = ({ className = '', value = 0, title = '' }) => (
    <div className={`${className} ${styles.root}`}>
        <div>
            <Icon icon="truck" />
        </div>
        <div className="bar-section">
            <ProgressBar value={value} stripes={false} />
            <span>{title}</span></div>
        <div>
            <span>
                {value * 100}%</span>
        </div>
    </div>
);