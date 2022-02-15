import React from 'react';
import { Icon } from '../icon/Icon';

export interface IconContainerProps {
    className?: string;
    icon: string;
}

export const IconContainer: React.FC<IconContainerProps> = ({ icon, className = '' }) => (
    <div className={`${className} iconContainer`}>
        <Icon icon={icon} />
    </div>
);